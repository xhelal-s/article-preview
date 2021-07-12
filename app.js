const shareBtn = document.querySelector(".share-container");
const author = document.querySelector(".author");
const profilePic = document.querySelector(".profile-pic");
const authorName = document.querySelector(".name");
const activeSection = document.querySelector(".active-section");
const activeHeader = document.querySelector(".active-header");
const fb = document.querySelector(".fb");
const tw = document.querySelector(".tw");
const pinterest = document.querySelector(".pinterest");
const share = document.querySelector(".share");

let colorCounter = 0;

const activeState = function () {
  profilePic.classList.toggle("hidden");
  authorName.classList.toggle("hidden");
  activeSection.classList.toggle("hidden");
  activeHeader.classList.toggle("hidden");
  fb.classList.toggle("hidden");
  tw.classList.toggle("hidden");
  pinterest.classList.toggle("hidden");

  if (colorCounter === 0) {
    author.style.backgroundColor = "hsl(217, 19%, 35%)";
    colorCounter = 1;
  } else {
    author.style.backgroundColor = "#fff";
    colorCounter = 0;
  }
};

shareBtn.addEventListener("click", function () {
  activeState();
});
