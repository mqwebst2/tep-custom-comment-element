import store from "./store/index.js";
import List from "./components/comment.js";
import CommentResponse from "./components/commentResponse.js";

const form = document.querySelector("#form");
const output = document.getElementById("ouput");

const nameField = form.querySelector("#name");
const emailField = document.getElementById("email");
const commentField = document.getElementById("comment");

const approvalCheckbox = document.getElementById("checkbox");

var numberOfSubmissions = 0;
let newSubmission = `<comment-response></comment-response>`;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  numberOfSubmissions += 1;
  console.log(numberOfSubmissions);

  if (!approvalCheckbox.checked) {
    alert(
      "Please check this box if you would like for your comment to be submitted to this page."
    );
  } else {
    store.dispatch("addItem", newSubmission);
    nameField.value = "";
    emailField.value = "";
    commentField.value = "";
  }
});

const listInstance = new List();

listInstance.render();
