import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
/* the application itself reloads, but not the page. */
//if (module.hot) {
//  module.hot.accept();
//}