export default class CommentResponse extends HTMLElement {
  connectedCallback(form) {
    this.newForm = form;

    var formData = new FormData(this.newForm);

    let input = [];

    for (const value of formData.values()) {
      input.push(value);
    }

    let newDate = new Date();

    console.log(input);

    return `
    Name: ${input[0]}<br />
    Email: ${input[1]}<br />
    Comment: ${input[2]}<br />
    Date: ${newDate}
  `;
  }
}

customElements.define("comment-response", CommentResponse);
