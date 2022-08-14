// Custom Comment Component Template
// class CommentComponent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<form id="form" name="form">
//       <label for="name">Name: </label>
//       <input type="text" id="name" name="name" required />
//       <label for="email">Email: </label>
//       <input type="text" id="email" name="email" required /><br /><br />
//       <label for="comment">Comment: </label>
//       <textarea id="comment" name="comment" cols="44" rows="10" required></textarea><br /><br />
//       <input type="checkbox" id="checkbox" name="checkbox" />
//       <label for="checkbox">Checking this box agrees to submit/post this comment.</label><br /><br />
//       <input type="submit" id="submit-btn" value="Submit" />
//     </form>`;
//   }
// }

// customElements.define("comment-component", CommentComponent);

class CommentResponse extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      Name: ${nameField.value}<br /><br />
      Email: ${emailField.value}<br /><br />
      Comment: ${commentField.value}<br /><br />
    `;
  }
}

customElements.define("comment-response", CommentResponse);

const form = document.getElementById("form");
const output = document.getElementById("output");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const commentField = document.getElementById("comment");
const approvalCheckbox = document.getElementById("checkbox");

var numberOfSubmissions = 0;
var newSubmission;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  newSubmission = "";

  numberOfSubmissions += 1;
  console.log(numberOfSubmissions);

  if (!approvalCheckbox.checked) {
    alert(
      "Please check this box if you would like for your comment to be submitted to this page."
    );
  } else {
    Array(numberOfSubmissions)
      .fill(null)
      .forEach(() => {
        newSubmission += `<comment-response class="comment-response"></comment-response>`;
      });
    output.innerHTML = newSubmission;
  }
});
