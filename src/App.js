import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';
import About from './pages/About';
import Donations from './pages/Donations';
import Contact from './pages/Contact'
import Layout from './pages/Layout'
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/donate' element={<Donations/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
