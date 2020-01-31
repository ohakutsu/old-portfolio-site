import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/organisms/Header'
import Home from './pages/Home'
import Posts from './pages/Posts'

export default function App () {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
