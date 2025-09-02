import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <small>&copy; 2025 My App</small>
      </footer>
    </>
  )
}

export default App
