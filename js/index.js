"use strict";

const rootDiv = document.querySelector("div");

function getFact() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => randomFacts(data))
    .catch((err) => console.log(err));
}

function getCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => randomPics(data))
    .catch((err) => console.log(err));
}

function createContent() {
  getFact();
  getCat();
}

function randomFacts(facts) {
  console.log("fact :>> ", facts.fact);
  const htmlEl = document.querySelector(".fact");

  if (!!htmlEl) {
    htmlEl.textContent = facts.fact;
  } else {
    const randomFactsEl = document.createElement("p");
    randomFactsEl.classList.add("fact");
    rootDiv.append(randomFactsEl);
    randomFactsEl.textContent = facts.fact;
  }
}

function randomPics(cuteCat) {
  const randomPicsEl = document.createElement("img");

  const htmlEl = document.querySelector(".catImg");

  if (!!htmlEl) {
    htmlEl.src = cuteCat.file;
  } else {
    randomPicsEl.classList.add("catImg");
    randomPicsEl.src = cuteCat.file;

    rootDiv.append(randomPicsEl);
  }
}

createContent();

const btnEl = document.createElement("button");
btnEl.onclick = createContent;
rootDiv.after(btnEl);
btnEl.textContent = "Another fact about cats";
