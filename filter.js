function Filter() { }
const films = document.getElementById("films")
Filter.prototype.go = function (element) {
    element = element.toLowerCase()
    let films_titles = document.querySelectorAll("#film-title")
    films_titles.forEach((x) => {
        let title_value = x.textContent.toLowerCase()
        if (title_value.indexOf(element) === -1) { // Bulamadı
            x.parentElement.style = "display:none"
        }
        else {
            x.parentElement.style = "display:table-row"
        }
    })
}
