import "./components/comment.js";

import { store } from "./store.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const comment = document.querySelector("#comment");
  const checkbox = document.querySelector("#checkbox");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const date = new Date();

    store.set("name", name.value);
    store.set("email", email.value);
    store.set("comment", comment.value);
    store.set("date", date);

    store.addComment(name.value, email.value, comment.value, date);

    name.value = "";
    email.value = "";
    comment.value = "";
    checkbox.checked = false;
  });
});
