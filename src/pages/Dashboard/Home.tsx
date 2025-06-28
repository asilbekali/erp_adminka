import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  console.log("majorga keldi");


  useEffect(() => {
    navigate("/major")
  }, [])
  return ""
}

export default Home