import './App.css'
import CreateRecipe from './Components/CreateRecipe'
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Nav'
import Registration from './Components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SavedRecipe from './Components/SavedRecipe'
import ReadRecipe from './Components/ReadRecipe'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth/register' element={<Registration/>}></Route>
      <Route path='/auth/login' element={<Login/>}></Route>
      <Route path='/recipe/create-recipe' element={<CreateRecipe/>}></Route>
      <Route path='/recipe/saved-recipe' element={<SavedRecipe/>}></Route>
      <Route path='/read-recipe/:id' element={<ReadRecipe/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
