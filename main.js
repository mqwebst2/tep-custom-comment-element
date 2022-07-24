class CommentComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<form>
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" />
      <label for="email">Email: </label>
      <input type="text" id="email" name="email" /><br /><br />
      <label for="comment">Comment: </label>
      <textarea id="comment" name="comment" cols="44" rows="10"></textarea>
    </form>`;
  }
}

customElements.define("comment-component", CommentComponent);
