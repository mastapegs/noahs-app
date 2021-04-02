import './style.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomColor = () => {
  return `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
}

const renderNoahs = () => {
  const list = []
  for (let i = 0; i < 1_500; i++) {
    list.push(`<div
      style="
        background: ${randomColor()};
        color: ${randomColor()};
      "
      class="grid-item"
    >Noah</div>`)
  }
  return list.join('')
}

document.querySelector('#app').innerHTML = `
  <div class="grid">
    ${renderNoahs()}
  </div>
`
