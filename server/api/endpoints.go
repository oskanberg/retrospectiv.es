package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/oskanberg/retrospectiv.es/server/models"
	"github.com/oskanberg/retrospectiv.es/server/util"
)

/*
 * Return a all boards
 * GET /api/boards/
 */
func (a *api) GetAllBoardsHandler(w http.ResponseWriter, r *http.Request) {
	response, err := json.Marshal(a.boards)
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(response)
}

/*
 * Return a specific board
 * GET /api/boards/{board_id}
 */
func (a *api) GetSpecificBoardHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	boardID, ok := vars["board_id"]

	if !ok {
		log.Println("Board ID not supplied")
		http.Error(w, "Board ID not supplied.", http.StatusBadRequest)
		return
	}

	board, ok := a.boards.GetBoard(boardID)

	if !ok {
		log.Println("Board not found")
		http.NotFound(w, r)
		return
	}

	response, err := json.Marshal(board)
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Write(response)
}

/*
 * Return items from a specific board
 * GET /api/boards/{board_id}/items
 */
func (a *api) GetSpecificBoardItemsHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	boardID, ok := vars["board_id"]

	if !ok {
		log.Println("Board ID not supplied")
		http.Error(w, "Board ID not supplied.", http.StatusBadRequest)
		return
	}

	board, ok := a.boards.GetBoard(boardID)

	if !ok {
		log.Println("Board not found")
		http.NotFound(w, r)
		return
	}

	response, err := json.Marshal(board.GetItems())
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Write(response)
}

/*
 * Add a new item to the board
 * POST /api/boards/{board_id}/items
 */
func (a *api) AddItemToSpecificBoard(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	boardID, ok := vars["board_id"]

	if !ok {
		log.Println("Board ID not supplied")
		http.Error(w, "Board ID not supplied.", http.StatusBadRequest)
		return
	}

	board, ok := a.boards.GetBoard(boardID)

	if !ok {
		log.Println("Board not found")
		http.NotFound(w, r)
		return
	}

	var newItem models.BoardItem = &models.Item{}

	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(newItem)
	if err != nil {
		log.Println("Invalid item object", err)
		http.Error(w, "Invalid item object", http.StatusBadRequest)
		return
	}

	newItem.SetID(util.NewRandomIdentifier())

	board.AddItem(newItem)
	log.Println("Added new item to board", boardID)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Created"))
}
