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
      <div class="comment-block">
        <p><span>Name:</span> ${input[0]}</p>
        <p><span>Email:</span> ${input[1]}</p>
        <p><span>Comment:</span> ${input[2]}</p>
        <p><span>Date:</span> ${newDate}</p>
      </div>
    `;
  }
}

customElements.define("comment-response", CommentResponse);
