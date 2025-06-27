import { useNavigate } from "react-router-dom"
import { paths } from "../../hooks/paths"
import { useEffect } from "react"

const Home = () => {
  console.log("dash keldi");
  const navigate = useNavigate()
  useEffect(() => {
    navigate(paths.major)
  })
  return ""
}

export default Home 