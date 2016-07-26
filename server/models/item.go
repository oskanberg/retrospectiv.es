package models

import "github.com/oskanberg/retrospectiv.es/server/util"

type BoardItem interface {
	GetCategory() string
	GetContent() string
	GetID() string

	SetCategory(string)
	SetContent(string)
	SetID(string)
}

type Item struct {
	ID       string `json:"id"`
	Content  string `json:"content"`
	Category string `json:"category"`
}

func (b *Item) GetCategory() string {
	return b.Category
}

func (b *Item) GetContent() string {
	return b.Content
}

func (b *Item) GetID() string {
	return b.ID
}

func (b *Item) SetCategory(category string) {
	b.Category = category
}

func (b *Item) SetContent(content string) {
	b.Content = content
}

func (b *Item) SetID(id string) {
	b.ID = id
}

func NewBoardItem(content string, category string) BoardItem {
	newItem := &Item{}
	newItem.SetID(util.NewRandomIdentifier())
	newItem.SetContent(content)
	newItem.SetCategory(category)
	return newItem
}
