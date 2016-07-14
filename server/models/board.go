package models

type ItemBoard interface {
}

type ItemBoards interface {
	GetBoard(string) (ItemBoard, bool)
}

type Board struct {
	ID string `json:"id"`
}

type Boards map[string]Board

func (bs *Boards) GetBoard(id string) (ItemBoard, bool) {
	board, ok := (*bs)[id]
	return board, ok
}

func NewItemBoard() ItemBoard {
	return &Board{}
}

func NewItemBoards() ItemBoards {
	return &Boards{}
}
