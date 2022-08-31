import { database } from "../db.js";

export default class Comment {
  constructor() {}

  render(element) {
    const commentList = database.then(async (db) => {
      this.db = db;

      const comments = await db.getAll("comments");

      return comments;
    });

    const printComment = () => {
      commentList.then((a) => {
        if (a.length === 0) {
          element.innerHTML = `<p class="no-items">No comments have been left yet :(</p>`;
        } else {
          element.innerHTML = `
          <ul class="comment-items">
            ${a
              .map((item) => {
                return `
              <li class="comment-response"><button class="comment-del" aria-label="Delete this item">x</button>
              <p class="comment-name">Name: ${item[0]}</p>
              <p class="comment-name">Email: ${item[1]}</p>
              <p class="comment-name">Comment: ${item[2]}</p>
              <p class="comment-name">Date: ${item[3]}</p>
              </li>
              `;
              })
              .join("")}
          </ul>
          `;
        }

        element.querySelectorAll(".comment-del").forEach((button, index) => {
          button.addEventListener("click", () => {
            alert(index);

            a.splice(index, 1);

            database.then(async (db) => {
              this.db = db;

              const key = await db.getAllKeys("comments");

              await db.delete("comments", key[index]);
            });

            if (a.length === 0) {
              element.innerHTML = `<p class="no-items">No comments have been left yet :(</p>`;
            } else {
              element.innerHTML = `
              <ul class="comment-items">
                ${a
                  .map((item) => {
                    return `
                  <li class="comment-response"><button class="comment-del" aria-label="Delete this item">x</button>
                  <p class="comment-name">Name: ${item[0]}</p>
                  <p class="comment-name">Email: ${item[1]}</p>
                  <p class="comment-name">Comment: ${item[2]}</p>
                  <p class="comment-name">Date: ${item[3]}</p>
                  </li>
                  `;
                  })
                  .join("")}
              </ul>
              `;
            }
          });
        });
      });
    };

    printComment();
  }
}
