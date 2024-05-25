
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Exer1Horas } from './pages/Horas/1-exerc-horas'

function App() {


  return (
   
     


     <BrowserRouter>

        <header>
            <Link to="/">Home</Link>
            <Link to="/1-exerc-horas">Exer- Horas</Link>
        </header>
       
       <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/1-exerc-horas' element={<Exer1Horas/>}></Route>

       </Routes>

     
     </BrowserRouter>


   
  )
}

export default App
