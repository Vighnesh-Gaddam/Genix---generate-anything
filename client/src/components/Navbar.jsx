import { useNavigate } from "react"
import { ArrowRight } from "lucide-react"
import { asseets } from "../assets"

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <img src={asseets.logo} alt="Logo" className="w-32 sm:w-44" onClick={() => navigate("/")}/>

      <button>Get Started <ArrowRight /></button>
    </div>
  )
}
export default Navbar