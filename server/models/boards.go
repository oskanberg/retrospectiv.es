package models

/* multiple boards */
type ItemBoards interface {
	GetBoard(string) (ItemBoard, bool)
}

type Boards map[string]ItemBoard

func (bs Boards) GetBoard(id string) (ItemBoard, bool) {
	board, ok := bs[id]
	return board, ok
}

func NewItemBoards() ItemBoards {
	boards := Boards{}
	testBoard := NewItemBoard("abc")
	boards["abc"] = testBoard

	return boards
}
