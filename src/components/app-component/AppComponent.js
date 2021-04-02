import { LitElement, html } from 'lit-element'
import '../header-component'
import '../random-name-renderer'

export default class AppComponent extends LitElement {
  render() {
    return html`
      <header-component>So Many Noahs!!!</header-component>
      <random-name-renderer count="1500"></random-name-renderer>
    `
  }
}