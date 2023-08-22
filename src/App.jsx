import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MovieDetail from './pages/MovieDetail/MovieDetail'

function App() {
  const [searchValue, setsearchValue] = useState("")

  return (
    <div className='App' style={{ backgroundColor: "#303030" }}>
      <Header onSubmit={(inputValue) => setsearchValue(inputValue)} />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </div >
  )
}

export default App
