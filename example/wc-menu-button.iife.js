var SideDrawer = (function (exports) {
  'use strict';

  var css_248z = ":host {\n  width: 37px;\n}\n\n#m {\n  margin: 0;\n  width: inherit;\n  position: relative;\n  display: inline-block;\n  transform: rotate(0deg);\n  transition: 0.5s ease-in-out;\n  cursor: var(--wc-menu-button-cursor, default);\n  transition: all 0.2s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* this trick makes the height 75% of the width (4:3 ratio) */\n#m:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n\n@media (hover: hover) {\n  :host(:hover) {\n    opacity: 0.75;\n  }\n}\n\n#m span {\n  display: block;\n  position: absolute;\n  height: 20%;\n  width: 100%;\n  background: var(--wc-menu-button-color, #000000);\n  border-radius: 10%;\n  opacity: 1;\n  left: 0;\n  transform: rotate(0deg);\n  transition: 0.25s ease-in-out;\n}\n\n#m span:nth-child(1) {\n  top: 0%;\n}\n\n#m span:nth-child(2),\n#m span:nth-child(3) {\n  top: 40%;\n}\n\n#m span:nth-child(4) {\n  top: 80%;\n}\n\n:host([open]) #m span:nth-child(1) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n:host([open]) #m span:nth-child(2) {\n  transform: rotate(45deg);\n}\n\n:host([open]) #m span:nth-child(3) {\n  transform: rotate(-45deg);\n}\n\n:host([open]) #m span:nth-child(4) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUlyQix1QkFBdUI7RUFJdkIsNEJBQTRCO0VBQzVCLDZDQUE2QztFQUM3QyxnQ0FBZ0M7RUFDaEMsd0NBQXdDO0FBQzFDOztBQUVBLDZEQUE2RDtBQUM3RDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBSVAsdUJBQXVCO0VBSXZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUlFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUlFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztBQUNYIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDM3cHg7XG59XG5cbiNtIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogdmFyKC0td2MtbWVudS1idXR0b24tY3Vyc29yLCBkZWZhdWx0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIHRoaXMgdHJpY2sgbWFrZXMgdGhlIGhlaWdodCA3NSUgb2YgdGhlIHdpZHRoICg0OjMgcmF0aW8pICovXG4jbTphZnRlciB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICA6aG9zdCg6aG92ZXIpIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICB9XG59XG5cbiNtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdjLW1lbnUtYnV0dG9uLWNvbG9yLCAjMDAwMDAwKTtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBvcGFjaXR5OiAxO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcbn1cblxuI20gc3BhbjpudGgtY2hpbGQoMSkge1xuICB0b3A6IDAlO1xufVxuXG4jbSBzcGFuOm50aC1jaGlsZCgyKSxcbiNtIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiA0MCU7XG59XG5cbiNtIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiA4MCU7XG59XG5cbjpob3N0KFtvcGVuXSkgI20gc3BhbjpudGgtY2hpbGQoMSkge1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbjpob3N0KFtvcGVuXSkgI20gc3BhbjpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG46aG9zdChbb3Blbl0pICNtIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbjpob3N0KFtvcGVuXSkgI20gc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDAlO1xuICBsZWZ0OiA1MCU7XG59XG4iXX0= */";

  var template = "<div id=\"m\">\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n";

  // @ts-ignore
  // using a template so it only needs to be parsed once, whereas setting
  // innerHTML directly in the custom element ctor means the HTML would get parsed
  // for every custom element on the page
  const tmpl = document.createElement("template");
  tmpl.innerHTML = `<style>${css_248z}</style>${template}`;
  class WcMenuButton extends HTMLElement {
      constructor() {
          super();
          // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
          this.upgradeProperty = (prop) => {
              if (this.hasOwnProperty(prop)) {
                  let value = this[prop];
                  delete this[prop];
                  this[prop] = value;
              }
          };
          this.handleMenuButtonClick = (_e) => {
              this.open = !this.open;
          };
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
      get open() {
          return this.hasAttribute("open");
      }
      set open(isOpen) {
          if (isOpen) {
              if (!this.hasAttribute("open")) {
                  this.setAttribute("open", "");
              }
          }
          else {
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
      attributeChangedCallback(_name, _oldValue, _newValue) {
          if (_name === "open") {
              if (!this.open) {
                  this.dispatchEvent(new CustomEvent("closed", {
                      bubbles: true
                  }));
              }
              else {
                  this.dispatchEvent(new CustomEvent("opened", {
                      bubbles: true
                  }));
              }
          }
      }
  }
  customElements.define("wc-menu-button", WcMenuButton);

  exports.WcMenuButton = WcMenuButton;

  return exports;

}({}));
