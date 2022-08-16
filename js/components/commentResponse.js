export default class CommentResponse extends HTMLElement {
  connectedCallback() {
    var formData = new FormData(form);

    let input = [];

    for (const value of formData.values()) {
      input.push(value);
    }

    this.innerHTML = `
      Name: ${input[0]}<br />
      Email: ${input[1]}<br />
      Comment: ${input[2]}<br />
    `;
  }
}

customElements.define("comment-response", CommentResponse);
