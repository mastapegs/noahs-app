import { LitElement, html } from 'lit-element'
import svgStyles from './css.js'

export default class AppComponent extends LitElement {
  static get styles() {
    return [
      svgStyles,
    ]
  }
  render() {
    return html`
      <div class="container">
        <svg width="100" height="100">
          <line x1="0" y1="0" x2="100" y2="0" />
          <line x1="100" y1="0" x2="100" y2="100" />
          <line x1="100" y1="100" x2="0" y2="100" />
          <line x1="0" y1="100" x2="0" y2="0" />
        
          <rect x="10" y="10" width="30" height="30" fill="red"/>
          <circle cx="80" cy="50" r="15" fill="blue" />
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