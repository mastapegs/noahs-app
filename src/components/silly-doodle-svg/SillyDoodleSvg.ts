import { LitElement, html, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import svgStyles from './css'

export default class SillyDoodleSvg extends LitElement {
  static get styles() {
    return [
      svgStyles,
    ]
  }

  @property({ type: Boolean }) spin = false

  __handleSvgClick(e: Event) {
    if (!e?.target) return
    this.spin = true
    e.target.addEventListener("animationend", () => {
      this.spin = false
    })
  }

  __getSvgClass() {
    return classMap({ spin: this.spin })
  }

  render() {
    return html`
      <div class="container">
        <p>A super silly doodle</p>
        <svg class=${this.__getSvgClass()} @click=${this.__handleSvgClick} width="100" height="100">
          <rect x="10" y="10" width="30" height="30" fill="red" />
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