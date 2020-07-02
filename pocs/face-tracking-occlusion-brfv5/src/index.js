import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

document.getElementById('brfv5App').addEventListener('load', () => {
  ReactDOM.render(
    <React.StrictMode>
      <App brfv5App={window.brfv5App} />
    </React.StrictMode>,
    document.getElementById('root'),
  )
})

