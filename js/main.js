import store from "./store/index.js";
import List from "./components/comment.js";
import CommentResponse from "./components/commentResponse.js";

const form = document.querySelector("#form");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const commentField = document.getElementById("comment");

const approvalCheckbox = document.getElementById("checkbox");

var numberOfSubmissions = 0;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let newSubmission = new CommentResponse();
  let fullResponse = newSubmission.connectedCallback(form);

  numberOfSubmissions += 1;
  console.log(numberOfSubmissions);

  if (!approvalCheckbox.checked) {
    alert(
      "Please check this box if you would like for your comment to be submitted to this page."
    );
  } else {
    store.dispatch("addItem", fullResponse);
    nameField.value = "";
    emailField.value = "";
    commentField.value = "";
  }
});

const listInstance = new List();

listInstance.render();
