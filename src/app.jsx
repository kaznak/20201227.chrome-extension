import { h, Fragment, render } from 'preact'
import TimeNow from './component/time-now.jsx'

function MyComponent(props) {
  return (
    <div className="w-full h-full p-4 bg-gray-300">
      <div className="bg-red-300">
        <h1 className="text-2xl">my chrome extension</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item1/2 bg-blue-300">
          <TimeNow />
        </div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
        <div className="grid-item1/2 bg-green-300">{`My name is ${props.name}.`}</div>
      </div>
    </div>
  )
}

render(<MyComponent name="PREACT!" />, document.querySelector('#app'))
