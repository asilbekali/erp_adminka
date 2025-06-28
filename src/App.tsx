import { useContext } from 'react'
import './App.css'
import { AuthRoute } from './routes'
import { Context } from './context/Context'
import DashboardLayout from './features'

function App() {



  const token = useContext(Context)

  console.log(token);


  return token.token ? <DashboardLayout /> : <AuthRoute />

}

export default App
