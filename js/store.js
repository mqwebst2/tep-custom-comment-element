import { database } from "./db.js";

export class Store {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];
    this.commentList = [];

    database.then(async (db) => {
      this.db = db;

      const comments = await db.getAll("comments");

      // console.log("comments", comments);
      // console.log(this.commentItem);

      if (comments) {
        let commentItem;

        for (let i = 1; i <= comments.length; i++) {
          commentItem = await db.get("comments", i);
          this.commentList.push(commentItem);
        }
      }
    });

    this.state = new Proxy(init, {
      async set(state, key, value) {
        state[key] = value;

        if (self.db) {
          // await self.db.put("comments", this.newComment);
        }

        self.subscribers.forEach((subscriber) => {
          subscriber(state);
          console.log(subscriber);
        });
      },
    });
  }

  subscribe(cb) {
    if (typeof cb !== "function") {
      throw new Error(`You must subscribe with a function`);
    }

    this.subscribers.push(cb);
    cb(this.state);
  }

  set(key, value) {
    this.state[key] = value;
  }

  get(key) {
    return this.state[key];
  }

  addComment(name, email, comment, date) {
    this.commentItem = [];

    this.commentItem.push(name);
    this.commentItem.push(email);
    this.commentItem.push(comment);
    this.commentItem.push(date);

    database.then(async (db) => {
      this.db = db;

      await db.put("comments", this.commentItem);
    });
  }
}

export const store = new Store({ commentItem: [] });
