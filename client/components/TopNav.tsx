import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className="w-full h-16 py-2 flex items-center bg-black justify-between shadow shadow-gray-300/40 px-10">
      <h1 className="text-primary text-2xl font-bold">LOGO</h1>
      <div className="flex gap-3 items-center">
        <button className="bg-primary text-white p-2 rounded-md">
          <IoNotificationsOutline />
        </button>
        <button className="bg-primary text-white p-2 rounded-md">
          <IoCalendarOutline />
        </button>
        <div className="flex flex-col text-gray-300">
          <h1 className="font-semibold text-lg">Tuesday</h1>
          <p className="text-green-500 text-sm">26/06/2024</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
