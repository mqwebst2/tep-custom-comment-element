import { store } from "./store";

export default class Component {
  constructor() {}

  render(element) {
    console.log(store.newComment);
    if (!store.newComment) {
      element.innerHTML = `<p class="no-items">No comments have been left yet :(</p>`;
    }
    console.log(store.newComment);
    // element.innerHTML = `
    // <ul class="comment-items">
    //   ${store.state.newComment
    //     .map((comment) => {
    //       return `
    //       <li class="comment-response"><buttonclass="comment-del" aria-label="Delete this item">x</button>${comment}</li>
    //     `;
    //     })
    //     .join("")}
    // </ul>
    // `;
  }
}
