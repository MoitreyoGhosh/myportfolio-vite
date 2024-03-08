import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About' 
import Service from './components/Service' 
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
   <div className='flex flex-col gap-4'>
    <Header />
    <Home />
    <About />
    <Service />
    <Portfolio />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
