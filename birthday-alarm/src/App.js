import List from './List'
import data from './data'
import { useState } from 'react'

import './app.css'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App flex-container">
      <div className="section-container">
        <h2>{people.length} birthdays today</h2>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>Clear</button>
      </div>
    </div>
  )
}

export default App
