import store from "./store/index.js";

import List from "./components/comment.js";

class CommentResponse extends HTMLElement {
  connectedCallback() {
    const formData = new FormData(form);

    let input = [];

    for (const value of formData.values()) {
      input.push(value);
    }

    this.innerHTML = `<div>
      Name: ${input[0]}<br />
      Email: ${input[1]}<br />
      Comment: ${input[2]}
    </div>`;
  }
}

customElements.define("comment-response", CommentResponse);

const form = document.getElementById("form");

const approvalCheckbox = document.getElementById("checkbox");

var numberOfSubmissions = 0;
let newSubmission = `<comment-response class="comment-response"></comment-response>`;

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
  }
});

const listInstance = new List();

listInstance.render();
