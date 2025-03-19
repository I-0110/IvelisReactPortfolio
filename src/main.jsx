// import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';


import { StrictMode } from 'react';

// import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Blog from './pages/Blog';

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
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);