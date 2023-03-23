import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import logo from "../../public/logo@0.25x.png";

const NavBarItem = ({
  title,
  classprops,
}: {
  title: String;
  classprops: String;
}) => <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full fixed flex md:justify-center justify-between items-center p-4 blue-glassmorphism-ul">
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Road Map", "Updates", "Tokenomics", "White Paper"].map(
          (item, index) => (
            <NavBarItem key={item + index} title={item} classprops="" />
          )
        )}
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-start text-white animate-slide-in blue-glassmorphism-ul"
          >
            {["Road Map", "Updates", "Tokenomics", "White Paper"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
      <div className="md:flex-[0.5] ml-auto flex-initial md:ml-auto justify-center items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-12 cursor-pointer ml-auto md:mr-6"
        />
      </div>
    </nav>
  );
};

export default Navbar;
