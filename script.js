const resultats = document.getElementById("resultats");


document.getElementById("happycomment").addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(this);

  fetch("server.php", {
    method: "POST",
    body: formData
  })
  .then((response) => {
    return response.json();
  })
      .then((data) => {
        const r = data;
        const myp = document.createElement("p");
        const iconup = document.createElement("i");
        const icondown = document.createElement("i");
        const starfilled = document.createElement("i");
        const starempty = document.createElement("i");
        iconup.setAttribute("class", "fa-solid fa-face-smile");
        icondown.setAttribute("class", "fa-sharp fa-solid fa-face-angry");
        starfilled.setAttribute("class", "fa-solid fa-face-smile-hearts");
        starempty.setAttribute("class", "fa-thin fa-star");
        myp.innerHTML = this.elements.commentaire.value;
          

        const responseBox = document.createElement("div");
        responseBox.setAttribute("id", "responseBox");
          
          if (r.pos > r.neg) {
              iconup.style.color = "orange";
              responseBox.appendChild(iconup);
              responseBox.appendChild(myp);
              resultats.appendChild(responseBox);
          } else if (r.pos < r.neg) {
                icondown.style.color = "red";
                responseBox.appendChild(icondown);
                responseBox.appendChild(myp);
                resultats.appendChild(responseBox);
          } else { 
                
          }
  })
  .catch((error) => {
    console.log("Erreur : " + error);
  });
});
