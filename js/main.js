import "./components/comment.js";

import { store } from "./store.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const comment = document.querySelector("#comment");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
