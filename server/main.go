package main

import "github.com/oskanberg/retrospectiv.es/server/api"

func main() {
	api := api.NewBoardAPI()
	api.Start()
}
