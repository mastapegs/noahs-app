import { LitElement, html, css } from 'lit-element'
import rainbowDragon from './rainbow-dragon.svg'

export default class HeaderComponent extends LitElement {
  static get styles() {
    return [
      css`
        header {
          display: flex;
          justify-content: space-evenly;
          align-content: center;
          border-bottom: 5px solid hsla(240, 50%, 20%, 1);
          background-color: hsla(0, 0%, 30%, 1);
          color: white;
        }
        h1 {
          text-align: center;
          text-shadow: 0 5px 10px black;
          margin: 0;
          padding: 1rem 0;
        }
        img {
          height: 100%;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <div>
          <img src=${rainbowDragon} alt="Rainbow Dragon">
        </div>
        <h1>
          <slot name="text"></slot>
        </h1>
        <div>
          <img src=${rainbowDragon} alt="Rainbow Dragon">
        </div>
      </header>
    `
  }
}