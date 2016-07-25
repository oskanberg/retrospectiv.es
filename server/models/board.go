package models

type ItemBoard interface {
}

type ItemBoards interface {
	GetBoard(string) (ItemBoard, bool)
}

type Board struct {
	ID string `json:"id"`
}

type Boards map[string]ItemBoard

func (bs Boards) GetBoard(id string) (ItemBoard, bool) {
	board, ok := bs[id]
	return board, ok
}

func NewItemBoard(id string) ItemBoard {
	return &Board{
		ID: id,
	}
}

func NewItemBoards() ItemBoards {
	board := Boards{}
	board["123"] = NewItemBoard("123")
	return board
}
