import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (

        <>
        <Layout >

        </Layout> <Routes >
        <Route path = '/' element = {< Home /> }/> </Routes> </>





    );
}

export default App;