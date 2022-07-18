import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Footer from './components/Layout/Footer';
import Singup from './Auth/Signup';


const App = () => {
    return ( 
    <div className = "App" >
        <Layout ></Layout>
        <Routes >
        <Route path = '/' element = {<HomePage />}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/sign'element = {<Singup/>}/>
        </Routes> 
        <Footer></Footer>
        </div>
    );
}

export default App;