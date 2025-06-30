import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { path } from "../../hooks/paths"

const Home = () => {

  const navigate = useNavigate()
  useEffect(() => {
    navigate(path.singIn)
  }, [])
  return ""
}

export default Home 