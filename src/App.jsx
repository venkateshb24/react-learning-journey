import { useState } from 'react'
import Header from './header'
import Card from './card'
import Footer from './footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
