import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/profile.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-[#F5F7FA]">
      <div className="container mx-auto max-w-[1320px] relative h-auto md:h-[100px] p-10 flex flex-col md:flex-row justify-between md:justify-between items-center">
          <div className="flex flex-row md:flex-row items-center font-semibold gap-3">
            <a className="" href="#">
              <RxHamburgerMenu onClick={updateToggle} className="text-3xl md:text-4xl md:hidden"/>
            </a>
            <h1 className="text-3xl md:text-5xl font-bold">bagzz</h1>
          </div>

          <ul className={`${toggle ? "flex" : "hidden"} flex flex-col md:flex md:flex-row my-5 font-semibold text-[18px]`}>
            <li className='my-2 md:mx-4'>
              <a href="#">Products</a>
            </li>
            <li className='my-2 md:mx-4'>
              <a href="#">About</a>
            </li>
            <li className='my-2 md:mx-4'>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className={`${toggle ? "flex" : "hidden"} flex flex-col md:flex md:flex-row my-5`}>
            <li className='my-2 md:mx-4'>
              <a className="inline-flex justify-center items-center text-black px-4 py-2 " href="#">Login</a>
            </li>
            <li className='my-2 md:mx-4'>
              <a className="inline-flex justify-center items-center bg-black text-white px-4 py-2 rounded-md" href="#">Sign up</a> 
            </li>
          </ul>

          {/* <div className="my-2 md:my-0">
            <img
              className="w-[30px] md:w-[60px] rounded-full bg-black"
              src={Logo}
              alt="logo"
            />
          </div> */}
        </div>
    </div>
  );
}

export default Navbar;
