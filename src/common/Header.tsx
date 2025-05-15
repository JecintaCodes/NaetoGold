import { FaCartArrowDown } from "react-icons/fa";
import imgs from "../assets/react.svg";
import { IoSearchSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className=" bg-[#7A288A] border-b-[silver] border-b-[2px] h-[100px] w-[100%] flex justify-center items-center ">
      <div className="w-[90%] flex justify-between items-center ">
        {/* logo */}
        <div className="text-xl font-bold text-[#F7DC6F] flex justify-center items-center gap-2 ">
          {" "}
          <LuMenu /> NaetoGold
        </div>
        {/*end logo */}
        {/* navs */}
        <div className="flex justify-center items-center gap-[20px] ">
          <div className="w-[400px] h-[40px] border-[silver] border-2 rounded-[30px] flex justify-center items-center hover:cursor-pointer hover:border-[#626296] transition-all duration-700  ">
            <input
              className="w-[80%] h-[90%] text-[12px] p-1 outline-none  text-[#F7DC6F] bg-transparent "
              type="search"
              placeholder="search Product and categories"
            />
            <IoSearchSharp className="text-[#F7DC6F]" />
          </div>
          {/*end navs */}
          {/* account */}
          <div className="flex gap-[10px]  ">
            <div className="flex justify-center items-center gap-1.5 ">
              <img
                className="w-[30px] h[30px] rounded-full transition-all duration-700 hover:scale-[+1.1] hover:cursor-pointer "
                src={imgs}
                alt="picture"
              />
              <div className="text-[#F7DC6F] text-[15px] font-bold ">
                Accounts
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="text-[9px] w-[13px] h-[13px] text-[#FFFFFF] animate-bounce   bg-[red] flex justify-center items-center font-bold rounded-full absolute right-[350px] z-50 hover:cursor-pointer ">
              0
            </div>
            <FaCartArrowDown className="text-[#F7DC6F] relative  " />
            <div>
              <div className="text-[#F7DC6F] font-semibold mt-[-10px] hover:cursor-pointer ">
                Cart
              </div>
            </div>
          </div>
        </div>
        {/*end account */}
        {/* buttons */}
        <div>
          <button className="p-2 h-[30px] border-[2px] rounded-xl border-[#F7DC6F] text-[13px] hover:cursor-pointer text-[#FFFFFF] hover:text-[#626296] transition-all duration-700 font-bold flex justify-center items-center hover:scale-[+1.1] ">
            Login
          </button>
        </div>

        {/*end buttons */}
      </div>
    </div>
  );
};

export default Header;
