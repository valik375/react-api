import React, {FC} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'

const App:FC = () => {

  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map(item => <Route key={item.path}  path={item.path} element={item.element}/>)
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
