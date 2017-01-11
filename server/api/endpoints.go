package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/oskanberg/retrospectiv.es/server/models"
	uuid "github.com/satori/go.uuid"
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

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusFound)
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

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusFound)
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

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusFound)
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

	newItem.SetID(uuid.NewV4().String())

	board.AddItem(newItem)
	log.Println("Added new item to board", boardID)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Created"))
}

/*
 * Delete a specific item from
 * DELETE /api/boards/{board_id}/items/{item_id}
 */
func (a *api) DeleteSpeificItemFromSpecificBoard(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	boardID, ok := vars["board_id"]

	if !ok {
		log.Println("Board ID not supplied")
		http.Error(w, "Board ID not supplied.", http.StatusBadRequest)
		return
	}

	itemID, ok := vars["item_id"]

	if !ok {
		log.Println("Item ID not supplied")
		http.Error(w, "Item ID not supplied.", http.StatusBadRequest)
		return
	}

	board, ok := a.boards.GetBoard(boardID)

	if !ok {
		log.Println("Board not found")
		http.NotFound(w, r)
		return
	}

	ok = board.DeleteItem(itemID)

	if !ok {
		log.Println("Item not found in board")
		http.NotFound(w, r)
		return
	}

	log.Println("Deleted item from board", boardID)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Deleted"))
}

/*
 * Create a new board
 * POST /api/boards/
 */
func (a *api) AddNewBoard(w http.ResponseWriter, r *http.Request) {
	var newItem = &models.Board{}

	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(newItem)
	if err != nil {
		log.Println("Invalid board object", err)
		http.Error(w, "Invalid board object", http.StatusBadRequest)
		return
	}

	newBoard := a.boards.CreateNewBoard(newItem.GetTitle())
	log.Println("Added new board", newItem.GetTitle())

	response, err := json.Marshal(newBoard)
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}
