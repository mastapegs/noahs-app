import { LitElement, html, css } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'

export default class RandomNameRenderer extends LitElement {
  static get styles() {
    return [
      css`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
          place-items: center stretch;
          text-align: center;
        }
        .controls {
          padding: 1rem;
          font-weight: bold;
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
      count: { type: Number },
      names: { type: Array },
    }
  }
  
  constructor() {
    super()
    this.count = 1_500
    this.names = ['Noah', 'Kenzie']
  }

  __getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  
  __getRandomColor() {
    return `rgb(${this.__getRandomInt(256)}, ${this.__getRandomInt(256)}, ${this.__getRandomInt(256)})`
  }
  
  __getNameStyles() {
    return styleMap({
      background: this.__getRandomColor(),
      color: this.__getRandomColor(),
    })
  }
  
  __getRandomName() {
    return this.names[this.__getRandomInt(this.names.length)]
  }
  
  __renderNames() {
    const listOfNames = []
    for (let i = 0; i < this.count; i++) {
      listOfNames.push(html`<div style=${this.__getNameStyles()}>${this.__getRandomName()}</div>`)
    }
    return listOfNames
  }

  __handleCountChange(e) {
    this.count = e.target.value
  }
  
  render() {
    return html`
      <div class="controls">
        <p>Count: ${this.count}</p>
        <input min="0" max="200" value=${this.count} @change=${this.__handleCountChange} type="range" />
      </div>
      <div class="grid">
        ${this.__renderNames()}
      </div>
    `
  }
}