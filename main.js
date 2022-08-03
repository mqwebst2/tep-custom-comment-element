class CommentComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<form>
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email: </label>
      <input type="text" id="email" name="email" required /><br /><br />
      <label for="comment">Comment: </label>
      <textarea id="comment" name="comment" cols="44" rows="10" required></textarea><br /><br />
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label for="checkbox">Checking this box agrees to submit/post this comment.</label><br /><br />
      <button type="submit" id="submit-btn">Submit</button>
    </form>`;
  }
}

customElements.define("comment-component", CommentComponent);
