class UI{

  static addFilmToUI(newFilm) {
    const films = document.getElementById("films")
    films.innerHTML += `
      <tr>
          <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
          <td id="film-title">${newFilm.title}</td>
          <td>${newFilm.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `
  }
  static clearInputs(element1, element2, element3) {
    element1.value = ""
    element2.value = ""
    element3.value = ""
  }
  static showAlert(type, message) {
    const hr = document.querySelector(".card-body")
    let div = document.createElement("div")
    div.className = "alert alert-" + type
    div.setAttribute("role", "alert")
    div.textContent = message
    hr.appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 1000);
  }
  static deleteFilmFromUI(element) {
    element.remove()
  }
  static deleteAllFromUI() {
    const filmList = document.querySelector("#films")
    if (filmList.firstElementChild === null){
      this.showAlert("danger","Silinecek bir film bulunamadı")
    }
    else{
      while (filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove()
      }
      this.showAlert("success","Tüm filmler başarıyla silindi")
    }
    
  }
}