import { database } from "./db";
import { store } from "./store";

export default class Component {
  constructor() {}

  render(element) {
    // console.log("rendering");
    // console.log("before", store.commentItem);
    if (!store.commentItem) {
      element.innerHTML = `<p class="no-items">No comments have been left yet :(</p>`;
    }
    const commentList = database.then(async (db) => {
      this.db = db;

      const comments = await db.getAll("comments");

      return comments;
    });

    const printComment = () => {
      commentList.then((a) => {
        console.log(a);
      });
    };

    printComment();
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
