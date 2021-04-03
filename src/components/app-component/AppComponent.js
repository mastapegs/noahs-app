import { LitElement, html } from 'lit-element'
import '../header-component'
import '../random-name-renderer'

import { NAMES } from './const'

export default class AppComponent extends LitElement {
  render() {
    return html`
      <header-component>
        <span slot="text">Our Family!!!</span>
      </header-component>
      <random-name-renderer .names=${NAMES} count="1500"></random-name-renderer>
    `
  }
}