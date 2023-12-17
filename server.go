package main

import (
	"fmt"
	"net/http"

	"server/rendering"
)

func main() {
	port := "8080"
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	http.Handle("/files/", http.StripPrefix("/files/", http.FileServer(http.Dir("files/"))))
	http.HandleFunc("/", rendering.RenderBase)
	fmt.Printf("server running on :%s...\n", port)
	http.ListenAndServe(":"+port, nil)
}
