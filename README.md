# Vue Final Modal

<p align="center"><a href="https://vue-final-modal.org" target="_blank" rel="noopener noreferrer"><img src="https://vue-final-modal.org/preview.png" alt="Vue Final Modal Logo"></a></p>

<p align="center">
  <a href="https://npmcharts.com/compare/vue-final-modal?minimal=true"><img src="https://img.shields.io/npm/dm/vue-final-modal.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-final-modal"><img src="https://badgen.net/bundlephobia/minzip/vue-final-modal" alt="Size"></a>
  <a href="https://www.npmjs.com/package/vue-final-modal"><img src="https://img.shields.io/npm/v/vue-final-modal.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-final-modal"><img src="https://img.shields.io/npm/l/vue-final-modal.svg?sanitize=true" alt="License"></a>
  <a href="https://app.netlify.com/sites/vue-final-modal/deploys"><img src="https://api.netlify.com/api/v1/badges/444b13a8-540f-4438-94da-80c865c8f103/deploy-status" alt="Netlify Status"></a>
</p>

<p align="right">
  <a href="https://www.buymeacoffee.com/PL2qJIx" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" />
  </a>
</p>

Looking for a Vue 3 version? [It's over here](https://github.com/hunterliu1003/vue-final-modal/tree/next)

## 🎉 [Documentation](https://vue-final-modal.org)

## 🙌 [Examples](https://vue-final-modal.org/examples)

## Introduction

`Vue Final Modal` is a renderless component<br />
You can create a [higher-order component](https://vue-final-modal.org/examples/recommended-use) easily and can customize `template`, `script` and `style` based on your needs.

features:

- Support Vue 3 and Vue 2
- Tailwind CSS friendly
- Renderless component
- SSR support
- Stackable
- Detachable
- Scrollable
- Transition support
- Mobile friendly
- Tiny bundle size
- Accessibility support

## Installation

**Vue 3.0**

NPM:

```bash
npm install vue-final-modal@next --save
```

Yarn:

```bash
yarn add vue-final-modal@next
```

**Vue 2.0**

NPM:

```bash
npm install vue-final-modal --save
```

Yarn:

```bash
yarn add vue-final-modal
```

## Basic usage

### Register

#### Vue

- **Register in SFC**

```js
import { VueFinalModal } from 'vue-final-modal'

export default {
  components: {
    VueFinalModal
  }
}
```

- **Install globally**

```js
import { VueFinalModal } from 'vue-final-modal'

Vue.component('VueFinalModal', VueFinalModal)
```

#### Nuxt

- **Write a plugin `vue-final-modal.js`**

```js
// plugins/vue-final-modal.js
import VueFinalModal from 'vue-final-modal/lib/VueFinalModal.vue'

Vue.component('VueFinalModal', VueFinalModal)
```

- **Add plugin into `nuxt.config.js`**

```js
// nuxt.config.js
export default {
  plugins: [
    '~plugins/vue-final-modal.js'
  ],
}
```

#### CDN

- **jsDelivr**

```html
<script src="https://cdn.jsdelivr.net/npm/vue-final-modal"></script>
```

- **Unpkg**

```html
<script src="https://unpkg.com/vue-final-modal"></script>
```

### **Add component to template**

```html
<vue-final-modal v-model="showModal">
  Modal Content Here
</vue-final-modal>
```

### **Create a button**

```html
<button @click="showModal = true">Launch</button>
```

### **Default props**

```js
const CLASS_TYPES = [String, Object, Array]

{
  value: { type: Boolean, default: false },
  ssr: { type: Boolean, default: true },
  classes: { type: CLASS_TYPES, default: '' },
  overlayClass: { type: CLASS_TYPES, default: '' },
  contentClass: { type: CLASS_TYPES, default: '' },
  lockScroll: { type: Boolean, default: true },
  hideOverlay: { type: Boolean, default: false },
  clickToClose: { type: Boolean, default: true },
  preventClick: { type: Boolean, default: false },
  attach: { type: null, default: false, validator: validateAttachTarget },
  transition: { type: String, default: 'vfm' },
  overlayTransition: { type: String, default: 'vfm' },
  zIndexBase: { type: [String, Number], default: 1000 },
  zIndex: { type: [Boolean, String, Number], default: false }
}
```

## **Events**

### `@click-outside`

- Emits while modal container on click.

> If prop `clickToClose` is `false`, the event will still be emitted.

### `@before-open`

- Emits while modal is still invisible, but before transition starting.

### `@opened`

- Emits after modal became visible and transition ended. 

### `@before-close`

- Emits before modal is going to be closed. 

### `@closed`

- Emits right before modal is destroyed.

## Contribution

If you have any ideas for optimization of `vue-final-modal`, feel free to open [issues](https://github.com/hunterliu1003/vue-final-modal/issues) or [pull requests](https://github.com/hunterliu1003/vue-final-modal/pulls).
