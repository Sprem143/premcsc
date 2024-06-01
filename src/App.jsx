
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Success from './pages/Success';
import Cancel from './pages/Cancel'
import TandC from './pages/TandC';
import SandD from './pages/SandD';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CandR from './pages/CandR';
import Support from './pages/nav_page/Support';
import About from './pages/nav_page/About';
import Branches from './pages/nav_page/Branches';
import Services from './pages/nav_page/Services';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/success' element={<Success />}/>
          <Route path='/cancel' element={<Cancel />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/terms&conditions' element={<TandC/>}/>
          <Route path='/shipping&delivery' element={<SandD />}/>
          <Route path='/cancel&refund' element={<CandR />}/>
          <Route path='/support' element={<Support />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/branches' element={<Branches />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
