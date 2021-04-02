import { LitElement, html, css } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'

export default class NoahRenderer extends LitElement {
  static get styles() {
    return [
      css`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
          place-items: center stretch;
          text-align: center;
        }
        .grid > * {
          border: 1px solid black;
          text-shadow: 1px 1px black;
        }
      `,
    ]
  }

  static get properties() {
    return {
      count: {
        type: Number,
      },
    }
  }
  
  constructor() {
    super()
    this.count = 1_500
  }

  __getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  
  __getRandomColor() {
    return `rgb(${this.__getRandomInt(256)}, ${this.__getRandomInt(256)}, ${this.__getRandomInt(256)})`
  }
  
  __getNoahStyles() {
    return styleMap({
      background: this.__getRandomColor(),
      color: this.__getRandomColor(),
    })
  }
  
  __renderNoahs() {
    const listOfNoahs = []
    for (let i = 0; i < this.count; i++) {
      listOfNoahs.push(html`<div style=${this.__getNoahStyles()}>Noah</div>`)
    }
    return listOfNoahs
  }

  render() {
    return html`
      <div class="grid">
        ${this.__renderNoahs()}
      </div>
    `
  }
}