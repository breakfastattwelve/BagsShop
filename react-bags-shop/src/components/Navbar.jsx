import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/profile.png";

function Navbar() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10">
        <div className="font-semibold flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold text-[25px] md:text-[40px] font-bold">
            <a href="#">
              <RxHamburgerMenu />
            </a>
            <h1>bagzz</h1>
          </div>
          <div className="my-2 md:my-0">
            <img className="w-[30px] md:w-[60px] rounded-full bg-black" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
