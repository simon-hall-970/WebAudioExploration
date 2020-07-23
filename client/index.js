import React from 'react'
import ReactDOM from 'react-dom'
require('../public/main.css')

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
