import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Payment from './Payment.jsx'
import Completion from './Completion.jsx'
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Payment />}/>
          <Route path='/completion' element={<Completion />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App