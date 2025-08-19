import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
    <Header/> 
      <main>
        <h1>My Tasks</h1>
      </main>
    <Footer /> 
    </>
  )
}

export default App
