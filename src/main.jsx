
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '.pages/App';
import './index.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { Children, StrictMode } from 'react';




import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Define the accessible routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Projects',
        element: <Projects />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: 'Log',
        element: <Log />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//      <RouterProvider router={router} />
// )
