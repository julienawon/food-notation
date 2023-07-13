const resultats = document.getElementById("resultats");
const score = document.getElementById("score");
const scores = 0;
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
        iconup.setAttribute("class", "fa-solid fa-thumbs-up");
        icondown.setAttribute("class", "fa-solid fa-thumbs-down");
        starfilled.setAttribute("class", "fa-solid fa-face-smile-hearts");
        starempty.setAttribute("class", "fa-thin fa-star");
        myp.innerHTML = this.elements.commentaire.value;
          

        const responseBox = document.createElement("div");
        responseBox.setAttribute("id", "responseBox");
          
          if (r.pos > r.neg) {
              iconup.style.color = "green";
              responseBox.appendChild(iconup);
              responseBox.appendChild(myp);
            resultats.appendChild(responseBox);
            scores++;
          } else if (r.pos < r.neg) {
                icondown.style.color = "red";
                responseBox.appendChild(icondown);
                responseBox.appendChild(myp);
            resultats.appendChild(responseBox);
            scores--;
          } else { 
                
        }
        score.innerHTML = scores;
  })
  .catch((error) => {
    console.log("Erreur : " + error);
  });
});

const like = () => {
  if (document.getElementById("like").style.color == "red") {
    // remove color
    setTimeout(() => {
      document.getElementById("like").classList.remove("fa-shake");
    }
    , 1000);
    document.getElementById("like").style.color = "black";
  } else {
    document.getElementById("like").style.color = "red";
    // add class fa-shake for 5 seconds
    document.getElementById("like").classList.add("fa-shake");
    setTimeout(() => {
      document.getElementById("like").classList.remove("fa-shake");
    }
    , 1000);
  }
}

const displayCommentbox = () => { 
  document.querySelector(".feed + div").style.display = "block";
 if (document.getElementById("cc").style.color == "green") {
    // remove color
    document.getElementById("cc").style.color = "black";
  } else {
    document.getElementById("cc").style.color = "green";
  }
}

const addBookmark = () => { 
  if (document.getElementById("bookmark").style.color == "red") {
    // remove color
    document.getElementById("bookmark").style.color = "black";
  } else {
    document.getElementById("bookmark").style.color = "blue";
  }
}

const share = () => { 
  if (document.getElementById("ss").style.color == "gold") {
    // remove color
    document.getElementById("ss").style.color = "black";
  } else {
    document.getElementById("ss").style.color = "gold";
  }
}

