import { Outlet } from 'react-router-dom';

import Nav from './components/NavTabs';

function App() {

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <h1>Welcome to Ivelis Becker's Portfolio!</h1>
    </>
  )
}

export default App
