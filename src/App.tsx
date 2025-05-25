
import './App.css'
import { Analytics } from './components/Analytics'
import { Card } from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import  Newsletter  from './components/Newsletter'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
    </>
  )
}

export default App
