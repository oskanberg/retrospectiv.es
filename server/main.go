package main

import (
	"fmt"

	"github.com/oskanberg/retrospectiv.es/server/api"
)

func main() {
	api := api.NewBoardAPI()
	fmt.Println("Server starting ...")
	api.Start(":1123")
}
