
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Exer1Horas } from './pages/Horas/1-exerc-horas'

import './App.css'
import { Exer2Horas } from './pages/Coracoes/2-exer-coracao'

function App() {


  return (
   
     


     <BrowserRouter>

        <header>
            <Link to="/">Home</Link>
            <Link to="/1-exerc-horas">1-  Horas</Link>
            <Link to="/2-exer-coracao">2-Corações</Link>
        </header>
       
       <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/1-exerc-horas' element={<Exer1Horas/>}></Route>
            <Route path='/2-exer-coracao' element={<Exer2Horas/>}></Route>

       </Routes>

     
     </BrowserRouter>


   
  )
}

export default App
