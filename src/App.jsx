
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
       
        <Route index element={<Home />}>

        </Route>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
