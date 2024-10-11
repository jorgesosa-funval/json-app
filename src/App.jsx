import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Albums from './pages/Albums'
export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todos' element={<h1>Todos</h1>} />
        <Route path='/posts' element={<h1>Posts</h1>} />
        <Route path='/albums' element={<Albums/>} />
      </Routes>
    </>
  )
}


