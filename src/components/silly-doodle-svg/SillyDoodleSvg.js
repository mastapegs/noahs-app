import { LitElement, html } from 'lit-element'
import svgStyles from './css.js'

export default class SillyDoodleSvg extends LitElement {
  static get styles() {
    return [
      svgStyles,
    ]
  }

  __handleSvgClick(e) {
    console.log('spin!!!')
    e.target.classList.add('spin')
    e.target.addEventListener("animationend", () => {
      console.log('spin over')
      this.classList.remove('spin')
    })
  }
  
  render() {
    return html`
      <div class="container">
        <p>A super silly doodle</p>
        <svg @click=${this.__handleSvgClick} width="100" height="100">
          <rect x="10" y="10" width="30" height="30" fill="red"/>
          <circle cx="65" cy="30" r="15" fill="blue" />
          <path d="
            M 10 90
            C 20 80 -5 40 10 50
            S 20 120 30 80
            S 0 50 40 50
            S 60 100 90 90
          " fill="transparent" stroke-width="3" />
        </svg>
      </div>
    `
  }
}