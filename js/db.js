import { openDB } from "idb/with-async-ittr";

export const database = openDB("comment-store", 1, {
  upgrade(db) {
    db.createObjectStore("comments", {
      keyPath: "id",
      autoIncrement: true,
    });
  },
});
