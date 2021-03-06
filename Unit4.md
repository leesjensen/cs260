# Unit 4 - Vue

All the examples use Vue 2. The current version is 3.

## Vue Interesting Things

- [Vue Loader Explained](https://vue-loader-v14.vuejs.org/en/)

# Vue 4.1 - Vue Basics

**Directives**

- v-text - element's textContent
- v-html - element's innerHTML
- v-bind (or shortcut :) - bind an attribute, or component property
  ```
  <img v-bind:src="imageSrc">
  <img :src="imageSrc">
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>
  <div :class="[classA, { classB: isB, classC: isC }]">
  <div :style="{ fontSize: size + 'px' }"></div>
  <div :style="[styleObjectA, styleObjectB]"></div>
  <my-component :prop="someThing"></my-component>
  ```
- v-if, v-else, v-else-if - adds or removes elements
- v-show - toggles display CSS property
- v-model - two way binding
- v-once - Renders once, no binding
- v-for - iterate array or object
  ```
  <div v-for="item in items">
  <div v-for="(item, index) in items"></div>
  <div v-for="(val, key) in object"></div>
  ```
- v-on (or shortcut @) - v-on:click with modifies
  ```
  <button @click.stop.prevent="doThis"></button>
  <input @keyup.enter="onEnter">
  ```
- v-model - form inputs to components

**Computed**
vue instance properties that get computed

**Methods**
create a method on the vue instance

**Watchers**
Watch when something changes

**Lifecycle hooks**

- created, mounted, updated, destroyed

**Template**

- {{mustache}} - text output from the expression
- You can put full javascript in the template.
- Only a single expresssion.

**Filters**
Component or globally defined functions that can be used to filter template content.

```
{{ 'hello' | uppercase | reverse }}
```

## V0 - Vue-Rest

Step through simple Vue component for loading cities
vue-v0-rest

## V1 - Learning Vue

This tutorial steps through much of the basics for Vue
vue-v1-learning

## V2 - Todo List

This tutorial steps you through building a todo list
vue-v2-todo

## Lab 3a - Vue XKCD Browser

# Vue 4.2 Components, Router

**Components**
reusable component - picture display
You can have properties on a component that you can bind.
You can also emit events to the parent.

```

Vue.component('todo-item', {
template: '<li>This is a todo</li>'
})

<ol>
  <todo-item></todo-item>
</ol>
```

**Transitions & Animation**
https://v2.vuejs.org/v2/guide/transitions.html

**Routing**
https://v2.vuejs.org/v2/guide/routing.html

Simple routing can be done by overriding the render function on a vue instance.

**Mixins**
https://v2.vuejs.org/v2/guide/mixins.html

# Vue 4.3 - Build toolchain CLI, Vetur development support

install cli

```
npm install -g @vue/cli
```

** Single File Components**
This is a xx.vue file that contains the template, script, and css for a component.

> One important thing to note is that separation of concerns is not equal to separation of file types. In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable. - https://v2.vuejs.org/v2/guide/single-file-components.html#What-About-Separation-of-Concerns

**Cover the vue file format.**

This is the first transpiled project and so we need a build chain.

### CLI demo

```
npm install -g @vue/cli
vue --version
vue create demo
```

Select manuel features. Choose Babel, Linter, Vue 2.x, EsLint with error prevention only, lint on save, dedicated config files

Walk through all of the file that are generated.

**Package.json**
It's node.js time!
Explain how NPM uses this file. also package-lock.json, dependencies and such.

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

**Deploying a webpacked code base**

- [vue-cli-service](https://cli.vuejs.org/guide/cli-service.html) - Will use webpack to build a distribution bundle
- [webpack](https://webpack.github.io/) - Package JavaScript modules into static assests that can be hosted on a browser.
- [vueloader](https://vue-loader-v14.vuejs.org/en/) - Loader for webpack that can transform vue files into javascript

```
npm run build
```

Executes `vue-cli-service` whihc calls `webpack` with the `vueloader` to transform all the `.vue` files into static resources
that can be hosted in the browser. Takes this:

```html
<div>App</div>
<div id="app"></div>
<!-- build files will be auto injected -->
```

Into something like:

```html
<div>App</div>
<div id="app"></div>
<!-- Injected -->
<script src="js/chunk-vendors.ce2ca14e.js"></script>
<script src="js/app.16271a96.js"></script>
```

If you want to host the dist directory under something other than root, then modify `vue.config.js` to set a different public path.

```javascript
module.exports = {
  publicPath: '',
};
```

###Debugging###

https://v2.vuejs.org/v2/cookbook/debugging-in-vscode.html

####Using Chrome debug extension####

1. Chrome debug extension. Installed by default under @builtin
1. Set a breakpoint on some JavaScript
1. Launch the websrever with `http-server -c-1` or use the live-server extension.
1. `SHIFT-CMD P` and type `Debug: Open Link`, paste in the URL from launching the server. This will attach to the given URL.
1. You breakpoint should now activate.

## V3 - Learning Vue CLI

A simple cli created app. The dist directory must be deployed.

Talk about just deploying the dist directory.
Changing the NGINX config to point to the right directory.

# Vue 4.4 - Vue Router

https://v2.vuejs.org/v2/guide/routing.html
https://github.com/vuejs/vue-router
https://github.com/chrisvfritz/vue-2.0-simple-routing-example

maybe build a simple router

## Lab 3b - Grocery Store

# Vue 4.5 - Vue Inside

- Render
- Reactivity - how does it work?

How would you build Vue?

TypeScript? Maybe WebSockets?

**Reactivity in Depth**
https://v2.vuejs.org/v2/guide/reactivity.html

## Vue Quiz
