import { h, Component, render } from 'preact'

const appContainer = document.querySelector('#app')

function MyComponent(props) {
  return h('div', null, `My name is ${props.name}.`)
}

export default function mount() {
  render(MyComponent({ name: 'PREACT!' }), appContainer)
}
