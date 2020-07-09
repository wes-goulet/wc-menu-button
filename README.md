![Build](https://github.com/wes566/wc-menu-button/.github/workflows/wc.yml/badge.svg)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/wc-menu-button) [![npm](https://img.shields.io/npm/v/wc-menu-button.svg)](https://npmjs.org/package/wc-menu-button)

[![Dependencies Status](https://david-dm.org/wes566/wc-menu-button/status.svg)](https://david-dm.org/wes566/wc-menu-button)

# wc-menu-button

A simple, animating side drawer built as a Web Component

![wc-menu-button demo](demo.gif)

## [Demo](https://wc-menu-button.netlify.com/)

## Installation

You can integrate wc-menu-button via `<script>` tag or via NPM.

### Via `<script>` tag

In the `<head>` of your index.html put a script tag like this:

```html
<script
  type="module"
  src="https://unpkg.com/wc-menu-button/dist/esm/wc-menu-button.min.js"
></script>
<script
  nomodule
  src="https://unpkg.com/wc-menu-button/dist/iife/wc-menu-button.min.js"
></script>
```

Now you can use the `wc-menu-button` element anywhere in your html, JSX, template, etc.

### Via NPM

```bash
npm install wc-menu-button --save
```

And then you need to import the module before you can use it in your html/jsx/template:

```js
import "wc-menu-button";
```

## Web Component Browser Support

This web component uses [HTML templates](https://caniuse.com/#feat=template), the [shadow DOM](https://caniuse.com/#feat=shadowdomv1), and [custom elements](https://caniuse.com/#feat=custom-elementsv1). If you need to polyfill for any of these standards then [take a look at the web components polyfill](https://github.com/webcomponents/webcomponentsjs).

## API and Customization

### Attributes/Properties

- `open`
  - Add this attribute to put the menu button in the "open" state.
    - Example: `<wc-menu-button open></wc-menu-button>`
  - Set the property in Javascript to imperatively toggle the drawer
    - Example: `drawer.open = true`
  - In (p)react you might need to set undefined in your JSX (since false !== undefined for html attribute existence)
    - Example: `<wc-menu-button open={this.state.isMenuOpen || undefined}></wc-menu-button>`

### Events

- `opened`
  - Raised when the menu button changes to the "open" state.
  - Example: `menu.addEventListener("opened", handleOpen())`
  - When subscribing in html listen for `onopened`
    - Ex: `<wc-menu-button onopened="handleOpen()">`
- `closed`
  - Raised when the menu button changes to the not "open" state.
  - Example: `menu.addEventListener("closed", handleClose())`
  - When subscribing in html listen for `onclosed`
    - Ex: `<wc-menu-button onclosed="handleClose()">`

### Styling

You can style the wc-menu-button element as you would any regular element, in CSS. A list of supported CSS properties are below, along with the default values.

```css
:root {
  /* Menu button color is set with CSS variable */
  --wc-menu-button-color: #000000;

  /* The default mouse cursor is used by default */
  --wc-menu-button-cursor: default;
}

/* You only need to set the width, the height is calculated to maintain proportion */
wc-menu-button {
  width: 37px;
}

/* Set to `1.0` if you do not want any hover opacity effect */
wc-menu-button:hover {
  opacity: 0.75;
}
```

## Contribute

This project is built with standard HTML/CSS/TS, no frameworks or special web-component compilers here (for maximum simplicity and minimum size). If you want to learn more about writing custom elements see [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) or [this web fundamentals page](https://developers.google.com/web/fundamentals/web-components/).

```bash
npm install
npm start
```

This will start a live-server on port localhost:8080. Any changes you make to files in lib/ or any changes to example/index.html should get live reloaded.

## Acknowledgements

Thanks to [BrowserStack](https://www.browserstack.com/) for cross browser testing.

[![BrowserStack](./browserstack-logo.png)](https://www.browserstack.com/)
