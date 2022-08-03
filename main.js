class CommentComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<form id="form" name="form">
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email: </label>
      <input type="text" id="email" name="email" required /><br /><br />
      <label for="comment">Comment: </label>
      <textarea id="comment" name="comment" cols="44" rows="10" required></textarea><br /><br />
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label for="checkbox">Checking this box agrees to submit/post this comment.</label><br /><br />
      <input type="submit" id="submit-btn" value="Submit" />
    </form>`;
  }
}

customElements.define("comment-component", CommentComponent);

class CommentResponse extends HTMLElement {
  connectedCallback() {}
}

customElements.define("comment-response", CommentResponse);

const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(form);

  let input = [];

  for (let value of formData.values()) {
    input.push(value);
  }

  output.innerHTML = `${input}`;
});
