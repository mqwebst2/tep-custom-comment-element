import { store } from "../store.js";

class NewComment extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const template = document
      .getElementById("comment-response")
      .content.cloneNode(true);

    shadow.append(template);

    this.name = this.shadowRoot.querySelector(".comment-name");
    this.email = this.shadowRoot.querySelector(".comment-email");
    this.text = this.shadowRoot.querySelector(".comment-text");
    this.date = this.shadowRoot.querySelector(".comment-date");
  }

  static get observedAttributes() {
    return ["name", "email", "comment", "date"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (property === "name" && this.name) {
      this.name.textContent = newValue;
    }
    if (property === "email" && this.email) {
      this.email.textContent = newValue;
    }
    if (property === "comment" && this.text) {
      this.text.textContent = newValue;
    }
    if (property === "date" && this.date) {
      this.date.textContent = newValue;
    }
  }

  connectedCallback() {
    store.subscribe((current) => {
      this.setAttribute("name", current.name);
      this.setAttribute("email", current.email);
      this.setAttribute("comment", current.comment);
      this.setAttribute("date", current.date);
    });
  }
}

if (customElements.get("new-comment") === undefined) {
  customElements.define("new-comment", NewComment);
}
