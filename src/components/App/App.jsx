import './App.css'
import '../../styles/reset.css'
import MainMenu from '../MainMenu/MainMenu'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Articles from '../Articles/Articles'
import SingleArticlePage from '../../pages/SingleArticlePage/SingleArticlePage'
function App() {
  return (
    <>
      <MainMenu />
      < Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:id' element={<SingleArticlePage />} />
      </ Routes>
    </>
  )
}

export default App
