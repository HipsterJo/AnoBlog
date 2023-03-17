
import { FaBell, FaPlus, FaSearch, FaUser } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="bg-[#D9F5FF] text-white p-4 flex justify-between items-center">
     <div className="flex items-center w-[60%] justify-between">
        <a className="text-4xl font-bold text-black">AnoBlog</a>
      

      
        <div className="mr-4 w-[50%]">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#c2e9fc] w-full rounded-md px-4 py-3 text-md focus:outline-2  focus:outline-blue-400 focus:bg-slate-50 text-gray-700"
          />
        </div>
        </div>
        <button className="bg-white  text-black  py-2 gap-x-1 pl-1 pr-2 rounded-lg flex items-center font-semibold">
                <BsPlus className="inline-block  " size="30px" />
                Создать
        </button>


        <div className="flex items-center">
        <div className="mr-4">
          <button className="bg-[#c2e9fc] rounded-lg px-4 py-4">
            <FaUser color="black"/>
          </button>
        </div>

        

        <div className="mr-4">
          <button className="bg-[#c2e9fc] rounded-lg px-4 py-4">
            <FaBell color="black"/>
          </button>
        </div>
        </div>
    </header>
  );
};

export default Header;