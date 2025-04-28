import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos"; 
import Hobbies from "./pages/Hobbies";
import Resume from "./pages/Resume";

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Videos" element={<Videos />} />
        {/* <Route path="/Hobbies" element={<Hobbies />} /> */}
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};


