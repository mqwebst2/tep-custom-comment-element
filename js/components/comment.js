import Component from "../lib/component.js";
import store from "../store/index.js";

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.getElementById("output"),
    });
  }

  render() {
    let self = this;

    if (store.state.items.length === 0) {
      self.element.innerHTML = `<p class="no-items">No comments have been left yet :(</p>`;
      return;
    }

    self.element.innerHTML = `
      <ul class="comment-items">
        ${store.state.items
          .map((item) => {
            return `
            <li>${item}<button class="comment-del" aria-label="Delete this item">X</button></li>
          `;
          })
          .join("")}
      </ul>
    `;

    self.element
      .getElementsByClassName("comment-del")
      .forEach((button, index) => {
        button.addEventListener("click", () => {
          store.dispatch("clearItem", { index });
        });
      });
  }
}
