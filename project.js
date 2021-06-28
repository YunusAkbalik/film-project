const form = document.getElementById("film-form")
const titleInput = document.getElementById("title")
const directorInput = document.querySelector("#director")
const urlInput = document.getElementById("url")
const filmList = document.getElementById("films")
const clearFilmsButton = document.getElementById("clear-films")
const filterInput = document.getElementById("filter")
// Tüm eventleri yükkleme
eventListeners()

function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", loadFilms)
    filmList.addEventListener("click", deleteFilm)
    clearFilmsButton.addEventListener("click", deleteAllFilm)
    filterInput.addEventListener("keyup", filterF)
}

function addFilm(e) {
    const titleValue = titleInput.value
    const directorValue = directorInput.value
    const urlValue = urlInput.value

    if (titleValue === "" || directorValue === "" || urlValue === "") {
        UI.showAlert("danger", "Tüm alanları doldurun...")
    }
    else {
        // Yeni film
        const film = new Film(titleValue, directorValue, urlValue)
        UI.addFilmToUI(film) // Arayüze film ekleme
        Storage.addFilmToStorage(film)
        UI.clearInputs(titleInput, directorInput, urlInput)
        UI.showAlert("success", "Film eklendi")
    }

    e.preventDefault()
}
function loadFilms() {
    let films = Storage.getFilmsFromStorage()
    films.forEach(x => {
        UI.addFilmToUI(x)
    });
}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target.parentElement.parentElement)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.showAlert("info", "Film başarıyla silindi")
    }
}
function deleteAllFilm() {
    if (confirm("Tüm filmleri silmek istediğinize emin misiniz ?")) {
        UI.deleteAllFromUI()
        Storage.deleteAllFromStorage()
    }
}
function filterF(e) {
    Filter.go(filterInput.value)
}