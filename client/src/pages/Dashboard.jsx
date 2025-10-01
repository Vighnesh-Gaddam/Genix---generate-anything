import { useEffect, useState } from "react"
import { dummyCreationData } from "../assets/assets"
import { Gem, Sparkle } from "lucide-react"
import { Protect } from "@clerk/clerk-react"
import CreationItem from "../components/CreationItem"

const Dashboard = () => {

  const [creations, setCreations] = useState([])

  const getDashboardData = async () => {
    setCreations(dummyCreationData)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">

        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <h1 className="text-sm">Total Creations</h1>
            <p className="text-xl font-semibold">{creations.length}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center text-white">
            <Sparkle className="w-5 text-white"/>
          </div>
        </div>

        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <h1 className="text-sm">Active Plan</h1>
            <p className="text-xl font-semibold">
              <Protect plan='premium' fallback= "Free">
                Premium
              </Protect>
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] flex justify-center items-center text-white">
            <Gem className="w-5 text-white"/>
          </div>
        </div>
      
      </div>

      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {
          creations.map((item)=> <CreationItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}
export default Dashboard