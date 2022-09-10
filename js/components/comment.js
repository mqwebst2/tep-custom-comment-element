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
        const emptyTemp = `<p class="no-items">No comments have been left yet :(</p>`;
        const commentTemp = `
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

        if (a.length === 0) {
          element.innerHTML = emptyTemp;
        } else {
          element.innerHTML = commentTemp;
        }

        element.querySelectorAll(".comment-del").forEach((button, index) => {
          button.addEventListener("click", () => {
            console.log(index);

            // a.splice(index, 1);

            // database.then(async (db) => {
            //   this.db = db;

            //   const key = await db.getAllKeys("comments");
            //   console.log(key[index]);

            //   await db.delete("comments", key[index]);
            // });

            // if (a.length === 0) {
            //   element.innerHTML = emptyTemp;
            // } else {
            //   element.innerHTML = `
            //   <ul class="comment-items">
            //     ${a
            //       .map((item) => {
            //         return `
            //       <li class="comment-response"><button class="comment-del" aria-label="Delete this item">x</button>
            //       <p class="comment-name">Name: ${item[0]}</p>
            //       <p class="comment-name">Email: ${item[1]}</p>
            //       <p class="comment-name">Comment: ${item[2]}</p>
            //       <p class="comment-name">Date: ${item[3]}</p>
            //       </li>
            //       `;
            //       })
            //       .join("")}
            //   </ul>
            //   `;
            // }
          });
        });
      });
    };

    printComment();
  }
}
