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
              iconup.style.color = "red";
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

const like = () => {
  if (document.getElementById("like").style.color == "red") {
    // remove color
    document.getElementById("like").classList.remove("fa-shake");
    document.getElementById("like").style.color = "black";
    setTimeout(() => {
      document.getElementById("like").classList.add("fa-flip");
    }
    , 500);
    document.getElementById("like").classList.remove("fa-flip");
  } else {
    document.getElementById("like").style.color = "red";
    document.getElementById("like").classList.remove("fa-flip");
    setTimeout(() => {
      document.getElementById("like").classList.add("fa-shake");
    }
    , 1000);
  }
  document.getElementById("like").classList.remove("fa-shake");
}

const displayCommentbox = () => { 
  document.querySelector(".feed + div").style.display = "block";
}