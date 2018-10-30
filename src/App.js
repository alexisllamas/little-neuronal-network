import React, { Suspense, lazy } from 'react'
import { Router, Redirect } from "@reach/router"

import './App.scss'

const One = lazy(() => import('./episodes/One'))
const Two = lazy(() => import('./episodes/Two'))
const Three = lazy(() => import('./episodes/Three'))
const Four = lazy(() => import('./episodes/Four'))

function App() {
    return (
      <div className="App">
        <div className="container">
          <h1>Alexis' super duper neuronal network</h1>
          <Suspense fallback={<div>Loading...</div>} wait={5000}>
            <Router>
              <Redirect
                from="/"
                to="one"
                noThrow
              />
              <One path="/one" />
              <Two path="/two" />
              <Three path="/three" />
              <Four path="/four" />
            </Router>
          </Suspense>
        </div>
      </div>
    )
}

export default App
