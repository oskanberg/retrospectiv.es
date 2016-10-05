package api

import (
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/oskanberg/retrospectiv.es/server/models"
)

// Route represents an API route
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

// Routes respresents multiple routes
type Routes []Route

// BoardAPI in an interface for the BoardAPI commands
type BoardAPI interface {
	Start()
}

type api struct {
	boards models.ItemBoards
}

func (a *api) Start() {
	var routes = Routes{
		Route{
			Name:        "Boards",
			Method:      "GET",
			Pattern:     "/api/boards",
			HandlerFunc: a.GetAllBoardsHandler,
		},
		Route{
			Name:        "SpecificBoard",
			Method:      "GET",
			Pattern:     "/api/boards/{board_id}",
			HandlerFunc: a.GetSpecificBoardHandler,
		},
		Route{
			Name:        "SpecificBoardItems",
			Method:      "GET",
			Pattern:     "/api/boards/{board_id}/items",
			HandlerFunc: a.GetSpecificBoardItemsHandler,
		},
		Route{
			Name:        "AddItemToSpecificBoard",
			Method:      "POST",
			Pattern:     "/api/boards/{board_id}/items",
			HandlerFunc: a.AddItemToSpecificBoard,
		},
	}

	r := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		r.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}

	http.ListenAndServe(":1123", handlers.CORS()(r))
}

// NewBoardAPI returns a pointer to an implementation of BoardAPI
func NewBoardAPI() BoardAPI {
	return &api{
		boards: models.NewItemBoards(),
	}
}
