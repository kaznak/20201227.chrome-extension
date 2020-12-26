import { h, Component, render } from 'preact'

const appContainer = document.querySelector('#app')

function MyComponent(props) {
  return <div>{`My name is ${props.name}.`}</div>
}

export default function mount() {
  render(MyComponent({ name: 'PREACT!' }), appContainer)
}
