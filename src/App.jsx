import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>

    </div>
  )
}

export default App
