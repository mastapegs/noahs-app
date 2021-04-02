import { LitElement, html } from 'lit-element'

/* <app-component></app-component> */

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const randomColor = () => {
//   return `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
// }

// const getNoahStyles = () => {
//   return styleMap({
//     background: randomColor(),
//     color: randomColor(),
//   })
// }

// const renderNoahs = () => {
//   const list = []
//   for (let i = 0; i < 1_500; i++) {
//     list.push(html`<div
//       style=${getNoahStyles()}
//       class="grid-item"
//     >${`Noah`}</div>`)
//   }
//   return list
// }

export default class AppComponent extends LitElement {
  render() {
    return html`
      <h1>Hello World</h1>
    `
  }
}

customElements.define('app-component', AppComponent)