import { LitElement, html } from 'lit-element'
import '../noah-renderer'
import '../header-component'

export default class AppComponent extends LitElement {
  render() {
    return html`
      <header-component>So Many Noahs!!!</header-component>
      <noah-renderer></noah-renderer>
    `
  }
}