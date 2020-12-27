import { h, Fragment, render } from 'preact'
import TimeNow from './component/time-now.jsx'

function MyComponent(props) {
  return (
    <Fragment>
      <h1>rollup-starter-app</h1>
      <TimeNow />
      <div>{`My name is ${props.name}.`}</div>
    </Fragment>
  )
}

render(<MyComponent name="PREACT!" />, document.querySelector('#app'))
