function UI() { }
UI.prototype.addFilmToUI = function (newFilm) {
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
UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = ""
  element2.value = ""
  element3.value = ""
}
UI.prototype.showAlert = function (type, message) {
  const hr = document.querySelector(".card-body")
  let div = document.createElement("div")
  div.className = "alert alert-" + type
  div.setAttribute("role", "alert")
  div.textContent = message
  // form.appendChild(br)
  // form.appendChild(br2)
  hr.appendChild(div)
  setTimeout(() => {
    div.remove()
  }, 1000);
}
UI.prototype.deleteFilmFromUI = function (element) {
  element.remove()
}
UI.prototype.deleteAllFromUI = function () {
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