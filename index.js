// IMAGE-1

var randomNumber1 = Math.floor(Math.random() * 3 + 1);

var randomImage1 = "image" + randomNumber1 + ".png";

var randomImageFolder1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageFolder1);

//IMAGE-2

var randomNumber2 = Math.floor(Math.random() * 3 + 1);

var randomImage2 = "image" + randomNumber2 + ".png";

var randomImageFolder2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageFolder2);

// WINNER

var imageSource1 = document.querySelectorAll("img")[0].src;

var imageSource2 = document.querySelectorAll("img")[1].src;

if (
  randomImageFolder1 === "images/image1.png" &&
  randomImageFolder2 === "images/image3.png"
) {
  //rock > scissor
  document.querySelector("h1").innerHTML = "Player-1 is the winner!!!";
  document.querySelector(".happy1").style.display="block";
} else if (
  randomImageFolder1 === "images/image1.png" &&
  randomImageFolder2 === "images/image2.png"
) {
  //rock < paper
  document.querySelector("h1").innerHTML = "Player-2 is the winner!!!";
  document.querySelector(".happy2").style.display="block";
} else if (
  randomImageFolder1 === "images/image1.png" &&
  randomImageFolder2 === "images/image1.png"
) {
  //rock === rock
  document.querySelector("h1").innerHTML = "DRAW!!!";
} else if (
  randomImageFolder1 === "images/image2.png" &&
  randomImageFolder2 === "images/image1.png"
) {
  //paper > rock
  document.querySelector("h1").innerHTML = "Player-1 is the winner!!!";
  document.querySelector(".happy1").style.display="block";
} else if (
  randomImageFolder1 === "images/image2.png" &&
  randomImageFolder2 === "images/image2.png"
) {
  //paper === paper
  document.querySelector("h1").innerHTML = "DRAW!!!";
} else if (
  randomImageFolder1 === "images/image2.png" &&
  randomImageFolder2 === "images/image3.png"
) {
  //paper < scissors
  document.querySelector("h1").innerHTML = "Player-2 is the winner!!!";
  document.querySelector(".happy2").style.display="block";
} else if (
  randomImageFolder1 === "images/image3.png" &&
  randomImageFolder2 === "images/image2.png"
) {
  //scissors > paper
  document.querySelector("h1").innerHTML = "Player-1 is the winner!!!";
  document.querySelector(".happy1").style.display="block";
} else if (
  randomImageFolder1 === "images/image3.png" &&
  randomImageFolder2 === "images/image3.png"
) {
  //scissors === scissors
  document.querySelector("h1").innerHTML = "DRAW!!!";
} else if (
  randomImageFolder1 === "images/image3.png" &&
  randomImageFolder2 === "images/image1.png"
) {
  //scissors < rock
  document.querySelector("h1").innerHTML = "Player-2 is the winner!!!";
  document.querySelector(".happy2").style.display="block";
}
