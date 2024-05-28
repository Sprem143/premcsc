
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
