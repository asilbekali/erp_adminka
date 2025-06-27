import { useContext } from 'react'
import './App.css'
import { AuthRoute, DashboardRoute } from './routes'
import { Context } from './context/Context'

function App() {

  const token = useContext(Context)

  return token.token ? <DashboardRoute /> : <AuthRoute />

}

export default App
