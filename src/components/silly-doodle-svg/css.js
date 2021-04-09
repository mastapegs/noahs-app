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
    stroke-width: 3px;
  }
  .spin {
    animation-name: spin;
    animation-duration: 3s;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`