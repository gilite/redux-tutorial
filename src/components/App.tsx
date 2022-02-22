import React from 'react'
import { Provider } from 'react-redux' // Provider: a react component that provides access to the redux store throughout all components
import { store } from '../state'
import RepositoriesList from './RepositoriesList'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package:</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App;