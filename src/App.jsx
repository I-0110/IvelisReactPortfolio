import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";

export default function App() {

  return (
    <Router>
      <Header />
      <Nav /> 
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
};


