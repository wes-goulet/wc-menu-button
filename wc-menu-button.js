// @ts-check

const style = `
:host {
  width: 37px;
}

#m {
  margin: 0;
  width: inherit;
  position: relative;
  display: inline-block;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: var(--wc-menu-button-cursor, default);
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
}

/* this trick makes the height 75% of the width (4:3 ratio) */
#m:after {
  padding-top: 75%;
  display: block;
  content: "";
}

@media (hover: hover) {
  :host(:hover) {
    opacity: 0.75;
  }
}

#m span {
  display: block;
  position: absolute;
  height: 20%;
  width: 100%;
  background: var(--wc-menu-button-color, #000000);
  border-radius: 10%;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#m span:nth-child(1) {
  top: 0%;
}

#m span:nth-child(2),
#m span:nth-child(3) {
  top: 40%;
}

#m span:nth-child(4) {
  top: 80%;
}

:host([open]) #m span:nth-child(1) {
  top: 40%;
  width: 0%;
  left: 50%;
}

:host([open]) #m span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

:host([open]) #m span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

:host([open]) #m span:nth-child(4) {
  top: 40%;
  width: 0%;
  left: 50%;
}
`;

const template = `
<div id="m">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
`;

// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement("template");
tmpl.innerHTML = `<style>${style}</style>${template}`;

export class WcMenuButton extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    /** @type {HTMLElement | null} */
    this._menuButton = shadowRoot.getElementById("m");
  }

  connectedCallback() {
    if (this._menuButton !== null) {
      this._menuButton.addEventListener("click", this.handleMenuButtonClick);
    }

    this.upgradeProperty("open");
  }

  // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
  /**
   * @param {string} prop
   *
   * @memberOf WcMenuButton
   */
  upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

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

  /**
   * @param {string} _name
   * @param {any} _oldValue
   * @param {any} _newValue
   * @memberof WcMenuButton
   */
  attributeChangedCallback(_name, _oldValue, _newValue) {
    if (_name === "open") {
      if (!this.open) {
        this.dispatchEvent(
          new CustomEvent("closed", {
            bubbles: true,
          })
        );
      } else {
        this.dispatchEvent(
          new CustomEvent("opened", {
            bubbles: true,
          })
        );
      }
    }
  }

  handleMenuButtonClick = () => {
    this.open = !this.open;
  };
}

customElements.define("wc-menu-button", WcMenuButton);
