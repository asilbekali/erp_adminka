import './App.css'
import { AuthRoute, DashboardRoute } from './routes'

function App() {

  const token = false

  return token ? <DashboardRoute /> : <AuthRoute />

}

export default App
