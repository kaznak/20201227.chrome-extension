import { h, render } from 'preact'

function MyComponent(props) {
  return <div>{`My name is ${props.name}.`}</div>
}

render(<MyComponent name="PREACT!" />, document.querySelector('#app'))
