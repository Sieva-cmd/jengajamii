import './App.css';
import { Routes, Route, } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

const App = () => {
    return ( 
    <div className = "App" >
        <Layout >
        <Routes >
        <Route path = '/' element = {<HomePage />}/>

        </Routes> 
        </Layout>




        </div>
    );
}

export default App;