import { css } from 'lit-element'

export default css`
  .container {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    background-color: hsl(180, 50%, 20%);
    color: white;
  }
  p {
    margin: auto 0;
    font-size: 2rem;
    text-shadow: 10px 10px 4px black;
  }
  svg {
    stroke: white;
    stroke-width: 5px;
  }
`