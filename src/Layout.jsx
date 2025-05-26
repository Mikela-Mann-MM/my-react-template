import Navigation from './Components/Navigation'
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
      <header>
        <Navigation />
        <h1>My App</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>&copy; 2023 My App</small>
      </footer>
    </>
  )
}

export default App
