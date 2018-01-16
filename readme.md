![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![NPM Version](https://img.shields.io/npm/v/konami-listener.svg?style=flat-square)

# Konami Listener

`konami-listener` is a web component that listens for the Konami Code. When a match is triggered, it will automatically show any content placed inside of the `konami-listener` component.

## Getting Started

### Script tag

- Add the javascript module in the head of your index.html file 
    ```html
    <script src='https://unpkg.com/konami-listener/dist/konami-listener.js'></script>
    ```
- Use `<konami-listener></konami-listener>` anywhere in your templates, JSX, html, etc

### Node Modules
- Run `npm install konami-listener --save`
- Add the javascript module in the head of your index.html file 
    ```html
    <script src='node_modules/konami-listener/dist/konami-listener.js'></script>
    ```
- Use `<konami-listener></konami-listener>` anywhere in your templates, JSX, html, etc

### In a stencil-starter app
- Run `npm install konami-listener --save`
- Add `{ name: 'konami-listener' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Use `<konami-listener></konami-listener>` anywhere in your templates, JSX, html, etc

## API
### Simple Usage
`<konami-listener>` allows you to place any content inside of it. It will then be shown when the code is matched. By default, the container is absolutely positioned over the entire page, so style the internal markup accordingly.
```html
<konami-listener>
  <h1> 💩 </h1>
</konami-listener>
```

### Events
`<konami-listener>` emits the following custom events
| Event Name  | Description                                      | Data                             |
| ----------- | ------------------------------------------------ | -------------------------------- |
| input       | Emitted on each keydown as the code progresses   | `{ key: string, index: number }` |
| match       | Emitted on the final match                       | none                             |

To listen for events, just use `addEventListener`. Since it uses custom HTML events, the data payload is bound to `event.detail`.
```js
const konami = document.querySelector('konami-listener');
konami.addEventListener('match', () => {
  console.log('Konami Code matched!');
})
konami.addEventListener('input', (e) => {
  const { key, index } = e.detail;
  console.log('Konami Code progress', { key, index });
})
```

## Framework Integration
If you'd like to drop this component into Angular, React, or any other framework, take a look at Stencil's [Framework Integration guide](https://stenciljs.com/docs/framework-integration)