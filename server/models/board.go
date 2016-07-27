package models

/* Single board */
type ItemBoard interface {
	AddItem(BoardItem)
	GetItem(string) (BoardItem, bool)
	GetItems() []BoardItem
	DeleteItem(string) bool
}

type Board struct {
	ID    string      `json:"id"`
	Items []BoardItem `json:"items"`
}

func (b *Board) AddItem(item BoardItem) {
	b.Items = append(b.Items, item)
}

func (b *Board) GetItem(itemID string) (BoardItem, bool) {
	for _, v := range b.Items {
		if v.GetID() == itemID {
			return v, true
		}
	}
	return nil, false
}

func (b *Board) GetItems() []BoardItem {
	return b.Items
}

func (b *Board) DeleteItem(itemID string) bool {
	for i, v := range b.Items {
		if v.GetID() == itemID {
			b.Items = append(b.Items[:i], b.Items[i+1:]...)
			return true
		}
	}
	return false
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
