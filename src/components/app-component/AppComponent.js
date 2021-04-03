import { LitElement, html } from 'lit-element'
import rainbowDragon from './rainbow-dragon.svg'
import '../header-component'
import '../random-name-renderer'
import '../silly-doodle-svg'

import { NAMES } from './const'

export default class AppComponent extends LitElement {
  render() {
    return html`
      <header-component>
        <img slot="before" src=${rainbowDragon} alt="Rainbow Dragon">
        <span slot="text">Our Family!!!</span>
        <img slot="after" src=${rainbowDragon} alt="Rainbow Dragon">
      </header-component>
      <silly-doodle-svg></silly-doodle-svg>
      <random-name-renderer .names=${NAMES} count="400"></random-name-renderer>
    `
  }
}