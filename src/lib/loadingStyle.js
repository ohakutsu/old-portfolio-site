const loadingStyle = `
  display: inline-block;
  background: linear-gradient(90deg, #ccc, #eee, #ccc);
  background-size: 200% auto;
  animation: loading 0.5s infinite linear;
  @keyframes loading {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`
export default loadingStyle
