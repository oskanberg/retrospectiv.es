package models

// ItemBoard is a single board interface
type ItemBoard interface {
	GetTitle() string
	AddItem(BoardItem)
	GetItem(string) (BoardItem, bool)
	GetItems() []BoardItem
	DeleteItem(string) bool
}

// Board implements ItemBoard
type Board struct {
	Title string      `json:"title"`
	ID    string      `json:"id"`
	Items []BoardItem `json:"items"`
}

// GetTitle returns the board title
func (b *Board) GetTitle() string {
	return b.Title
}

// AddItem adds specified item to the board
func (b *Board) AddItem(item BoardItem) {
	b.Items = append(b.Items, item)
}

// GetItem gets the specified id item from the board
func (b *Board) GetItem(itemID string) (BoardItem, bool) {
	for _, v := range b.Items {
		if v.GetID() == itemID {
			return v, true
		}
	}
	return nil, false
}

// GetItems returns a slice of all items in the board
func (b *Board) GetItems() []BoardItem {
	return b.Items
}

// DeleteItem deletes a specified item (id) from the board
func (b *Board) DeleteItem(itemID string) bool {
	for i, v := range b.Items {
		if v.GetID() == itemID {
			b.Items = append(b.Items[:i], b.Items[i+1:]...)
			return true
		}
	}
	return false
}

// NewItemBoard creates a new item board
func NewItemBoard(id, title string) ItemBoard {
	return &Board{
		ID:    id,
		Title: title,
	}
}
