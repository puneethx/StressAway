import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "./Pages/welcome/welcome"
import About from './Pages/about/about';
import Thoughts from "./Pages/yourThoughts/yourThoughts"
import Learn from "./Pages/learnGrow/learnGrow"
import Footer from './components/Footer/footer';



function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/your-thoughts" element={<Thoughts/>}></Route>
            <Route path="/learn&grow" element={<Learn/>}></Route>
            <Route path="/about-us" element={<About/>}></Route>
          </Routes>
        </>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
