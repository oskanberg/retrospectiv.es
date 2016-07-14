package api

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/oskanberg/retrospectiv.es/server/models"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

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
	}

	r := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		r.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}

	http.ListenAndServe(":1123", r)
}

func NewBoardAPI() BoardAPI {
	return &api{
		boards: models.NewItemBoards(),
	}
}
