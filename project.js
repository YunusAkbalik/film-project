const form = document.getElementById("film-form")
const titleInput = document.getElementById("title")
const directorInput = document.querySelector("#director")
const urlInput = document.getElementById("url")
const filmList = document.getElementById("films")
const clearFilmsButton = document.getElementById("clear-films")
const filterInput = document.getElementById("filter")
// UI objesini başlatma
const ui = new UI()
const storage = new Storage()
const filter = new Filter()
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
        ui.showAlert("danger", "Tüm alanları doldurun...")
    }
    else {
        // Yeni film
        const film = new Film(titleValue, directorValue, urlValue)
        ui.addFilmToUI(film) // Arayüze film ekleme
        storage.addFilmToStorage(film)
        ui.clearInputs(titleInput, directorInput, urlInput)
        ui.showAlert("success", "Film eklendi")
    }

    e.preventDefault()
}
function loadFilms() {
    let films = storage.getFilmsFromStorage()
    films.forEach(x => {
        ui.addFilmToUI(x)
    });
}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target.parentElement.parentElement)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.showAlert("info", "Film başarıyla silindi")
    }
}

function deleteAllFilm() {
    if (confirm("Tüm filmleri silmek istediğinize emin misiniz ?")) {
        ui.deleteAllFromUI()
        storage.deleteAllFromStorage()
        ui.showAlert("success", "Tüm filmler başarıyla silindi")
    }


}

function filterF(e) {
    filter.go(filterInput.value)
}