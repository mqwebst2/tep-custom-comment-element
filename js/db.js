import { openDB } from "idb/with-async-ittr";

export const database = openDB("comment-store", 1, {
  upgrade(db) {
    db.createObjectStore("comments", {
      keyPath: "id",
      autoIncrement: true,
    });
  },
});

// export async function addComment(name, email, comment, date) {
//   await (
//     await database
//   ).add("comments", {
//     name: name,
//     email: email,
//     comment: comment,
//     date: date,
//   });
// }
