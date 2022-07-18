import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Footer from "./components/Layout/Footer";
import Singup from "./Auth/Signup";
import Donation from "./components/DonationForm"
import Volunteer from "./components/Volunteer"
import Login from "./Auth/Login";

const App = () => {
  return (
    <div className="App">
      <Layout> </Layout>{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
              <Route path="/sign" element={<Singup />} />{" "}
              <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
};

export default App;
