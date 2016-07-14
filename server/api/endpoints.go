package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

/*
 * Return a all boards
 * /api/boards/
 */
func (a *api) GetAllBoardsHandler(w http.ResponseWriter, r *http.Request) {
	response, err := json.Marshal(a.boards)
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.Write(response)
}

/*
 * Return a specific board
 * /api/boards/{board_id}
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
