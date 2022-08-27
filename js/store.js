import { database } from "./db.js";

export class Store {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];

    database.then(async (db) => {
      this.db = db;

      const comments = await db.get("comment-store", "comments");
      console.log(comments);

      if (comments) {
        this.set("comments", comments);
      }
    });

    this.state = new Proxy(init, {
      async set(state, key, value) {
        state[key] = value;

        if (self.db) {
          await self.db.put("comment-store", value, "comments");
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
}
