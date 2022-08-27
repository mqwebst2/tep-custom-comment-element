import { openDB } from "idb";

export const database = openDB("comment-store", 1, {
  upgrade(db) {
    db.createObjectStore("comments", {
      name: "",
      email: "",
      comment: "",
      date: "",
    });
  },

  async addComment(name, email, comment, date) {
    await database.add("comments", {
      name: name,
      email: email,
      comment: comment,
      date: date,
    });
  },
});
