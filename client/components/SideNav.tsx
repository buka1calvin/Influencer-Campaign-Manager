import Navlinks from "./Navlinks";
import { CiLogout } from "react-icons/ci";


const SideNav = () => {
  return (
    <div className='w-52 h-full pt-10 relative'>
      <div className="bg-black text-white h-full rounded-e-md relative pt-4 flex flex-col justify-between pb-8">
        <div className="text-sm flex flex-col items-center justify-center space-y-1 absolute left-0 right-0 top-[-25px]">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-12 h-12 rounded-full border border-white shadow-lg shadow-gray-700/30" />
        <h1 className="font-semibold">
          Bukarani Calvin
        </h1>
        <p className="text-xs">Calvinbukarani@gmail.com</p>
        </div>
        <div className="">
          <Navlinks/>
          <button className="flex items-center gap-2 w-full justify-left bg-white/10 px-5 py-2 text-sm font-bold mt-3"><CiLogout className="h-6 w-6"/> LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default SideNav
