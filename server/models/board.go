package models

/* Single board */
type ItemBoard interface {
	AddItem(BoardItem)
	GetItems() []BoardItem
}

type Board struct {
	ID    string      `json:"id"`
	Items []BoardItem `json:"items"`
}

func (b *Board) AddItem(item BoardItem) {
	b.Items = append(b.Items, item)
}

func (b *Board) GetItems() []BoardItem {
	return b.Items
}

func NewItemBoard(id string) ItemBoard {
	return &Board{
		ID: id,
	}
}

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
