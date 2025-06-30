import { useNavigate } from "react-router-dom"
import { path } from "../../hooks/paths"

const MajorMore = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className="m-[50px] border-[1px] border-red-500 p-[5px]" onClick={() => navigate(path.major)}>Back</button>
      <p>must be endend this section !</p>
    </>
  )
}

export default MajorMore