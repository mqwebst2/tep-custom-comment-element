import { database } from "./db.js";

export class Store {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];
    this.newComment;

    database.then(async (db) => {
      this.db = db;

      const comments = await db.getAll("comments");
      console.log(comments);

      if (comments.length !== 0) {
        this.newComment = comments;

        console.log(this.newComment);
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
    this.newComment = [];
    console.log(this.newComment);

    this.newComment.push(name, email, comment, date);
    console.log(this.newComment);

    database.then(async (db) => {
      this.db = db;

      await db.put("comments", this.newComment);
    });
  }
}

export const store = new Store();
