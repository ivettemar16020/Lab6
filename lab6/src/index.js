import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
//import rootReducer from './reducers'

//const store = createStore()//createStore(rootReducer)

render(
  /*<Provider store={store}>*/
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
)
