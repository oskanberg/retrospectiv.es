package models

import "github.com/satori/go.uuid"

// ItemBoards is the interface to a collection of boards
type ItemBoards interface {
	GetBoard(string) (ItemBoard, bool)
	CreateNewBoard(string) ItemBoard
}

// Boards implements ItemBoards
type Boards map[string]ItemBoard

// GetBoard returns the ItemBoard-implementing board by id
func (bs Boards) GetBoard(id string) (ItemBoard, bool) {
	board, ok := bs[id]
	return board, ok
}

// CreateNewBoard adds a new board with the given title and returns it
func (bs Boards) CreateNewBoard(title string) ItemBoard {
	u1 := uuid.NewV4().String()
	newBoard := NewItemBoard(u1, title)
	bs[u1] = newBoard
	return newBoard
}

// NewItemBoards creates a new ItemBoards collection
func NewItemBoards() ItemBoards {
	return Boards{}
}
