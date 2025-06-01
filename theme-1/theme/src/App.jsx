import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Hero />
      <Footer />
    </div>
  )
}

export default App