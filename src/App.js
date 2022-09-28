import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Footer from "./components/Layout/Footer";
import Singup from "./Auth/Signup";
import Donations from "./pages/Donations"
import DonationForm from "./components/DonationForm"
import Volunteer from "./components/Volunteer"
import Login from "./Auth/Login";
import Contact from "./pages/Contact";
import BloodDform from "./components/BloodDform";


const App = () => {
  return (
    <div className="App">
      <Layout> </Layout>{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/sign" element={<Singup />} />{" "}
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/donate" element = {<DonationForm/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BloodDform" element={<BloodDform/>}/>
      </Routes>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
};

export default App;
