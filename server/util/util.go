package util

import (
	"encoding/base64"
	"os"
)

func NewRandomIdentifier() string {
	f, err := os.Open("/dev/urandom")
	if err != nil {
		panic("opening /dev/urandom failed")
	}

	defer f.Close()

	r := make([]byte, 20)
	f.Read(r)

	id := base64.StdEncoding.EncodeToString(r)

	// remove = from the end
	id = id[0 : len(id)-1]
	return id
}
