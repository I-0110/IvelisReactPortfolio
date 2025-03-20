import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/NavTabs';
import Header from './components/Header';
import About from "./pages/About";

export default function App() {

  return (
    <Router>
      <Header />
      <Nav /> 
  
      <Routes>
        <Route path="/" element={<About />} />
        
      </Routes>
    </Router>
  );
}

