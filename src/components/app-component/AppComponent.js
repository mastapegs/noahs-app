import { LitElement, html } from 'lit-element'
import '../noah-renderer'

export default class AppComponent extends LitElement {
  render() {
    return html`
      <h1>So Many Noahs!!!!!</h1>
      <noah-renderer></noah-renderer>
    `
  }
}