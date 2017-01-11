package models

import uuid "github.com/satori/go.uuid"

// BoardItem represents a single item on a board
type BoardItem interface {
	GetCategory() string
	GetContent() string
	GetID() string

	SetCategory(string)
	SetContent(string)
	SetID(string)
}

// Item implements BoardItem
type Item struct {
	ID       string `json:"id"`
	Content  string `json:"content"`
	Category string `json:"category"`
}

// GetCategory gets the Category property
func (b *Item) GetCategory() string {
	return b.Category
}

// GetContent gets the Content property
func (b *Item) GetContent() string {
	return b.Content
}

// GetID gets the ID property
func (b *Item) GetID() string {
	return b.ID
}

// SetCategory sets the category to a given string
func (b *Item) SetCategory(category string) {
	b.Category = category
}

// SetContent sets Content to a given string
func (b *Item) SetContent(content string) {
	b.Content = content
}

// SetID sets the id to a given string
func (b *Item) SetID(id string) {
	b.ID = id
}

// NewBoardItem creates a new board item with given content and category
func NewBoardItem(content string, category string) BoardItem {
	newItem := &Item{}
	newItem.SetID(uuid.NewV4().String())
	newItem.SetContent(content)
	newItem.SetCategory(category)
	return newItem
}
