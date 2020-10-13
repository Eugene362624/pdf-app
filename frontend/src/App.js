import React, { useEffect, useState } from 'react'
import './index.css'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import FileC from './components/File'
import List from './components/List'

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__header'>
          <h3>From HTML to PDF app</h3>
        </div>
        <main>
          <List />
          <Link to='/files/create'><button>Create</button></Link>
        </main>
        <Route path='/files/:id' component={FileC}/>
      </div>
    </BrowserRouter> 
  )
}

export default App;
