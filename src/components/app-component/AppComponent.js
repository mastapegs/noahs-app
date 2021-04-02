import { LitElement, html, css } from 'lit-element'
import '../noah-renderer'

export default class AppComponent extends LitElement {
  static get styles() {
    return [
      css`
        h1 {
          text-align: center;
          background-color: hsla(0, 0%, 30%, 1);
          color: white;
          text-shadow: 0 5px 10px black;
          margin: 0;
          padding: 1rem 0;
          border-bottom: 5px solid hsla(240, 50%, 20%, 1)
        }
      `
    ]
  }

  render() {
    return html`
      <h1>So Many Noahs!!!!!</h1>
      <noah-renderer></noah-renderer>
    `
  }
}