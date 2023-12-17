package rendering

import (
	"fmt"
	"html/template"
	"net/http"
)

func RenderBase(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Setting")
	w.Header().Set("Content-Type", "text/html")

	tmpl, err := template.ParseFiles("html/template.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
