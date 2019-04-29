// @ts-ignore
import style from "./style.css";
// @ts-ignore
import template from "./template.html";

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement("template");
tmpl.innerHTML = `<style>${style}</style>${template}`;

export class WcMenuButton extends HTMLElement {
  private _menuButton: HTMLElement | null;

  // Explicitly let TS know any type can come from index signature
  [key: string]: any;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
    this._menuButton = shadowRoot.getElementById("m");
  }

  connectedCallback() {
    if (this._menuButton) {
      this._menuButton.addEventListener("click", this.handleMenuButtonClick);
    }

    this.upgradeProperty("open");
  }

  // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
  upgradeProperty = (prop: string) => {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  };

  get open() {
    return this.hasAttribute("open");
  }

  set open(isOpen) {
    if (isOpen) {
      if (!this.hasAttribute("open")) {
        this.setAttribute("open", "");
      }
    } else {
      if (this.hasAttribute("open")) {
        this.removeAttribute("open");
      }
    }
  }

  static get observedAttributes() {
    return ["open"];
  }

  // private _bodyOverflow: string | null | undefined;
  // private _bodyPosition: string | null | undefined;
  attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
    if (_name === "open") {
      if (!this.open) {
        this.dispatchEvent(
          new CustomEvent("closed", {
            bubbles: true
          })
        );
      } else {
        this.dispatchEvent(
          new CustomEvent("opened", {
            bubbles: true
          })
        );
      }
    }
  }

  private handleMenuButtonClick = (_e: any) => {
    this.open = !this.open;
  };
}

customElements.define("wc-menu-button", WcMenuButton);

// JSX Type Declaration - using 'any' for now just so things will
// compile. Need to decide if we want to bring in a dep on (p)react
// so that we can properly extend HTMLAttributes JSX interface.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wc-menu-button": any;
    }
  }
}
