import React from "react";
import Image from "next/image";
import { IoMdPaw } from "react-icons/io";

import Logo from "../../public/res/macMock.png";
import Logo2 from "../../public/res/shib.png";
import Logo3 from "../../public/res/headlogo_S.png";
import { Parallax } from "react-scroll-parallax";

const Roadmap = () => {
  const [currentTab, setCurrentTab] = React.useState(1);

  const handleTabClick = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  function Component() {
    return (
      <div style={{ height: "fit-content", overflow: "hidden" }}>
        <Parallax translateX={[0, 90]} easing={[1.0, 0.93, 0.1, 0]}>
          <Image
            style={{ height: "55px", width: "55px" }}
            src={Logo2}
            alt={"Shiba Inu logo"}
          />
        </Parallax>
        <Parallax translateX={[0, 90]} easing={[0.97, 0.06, 0.4, 1.0]}>
          <Image
            style={{ height: "55px", width: "auto" }}
            src={Logo3}
            alt={"Munchkin Logo"}
          />
        </Parallax>
      </div>
    );
  }

  return (
    <div className="grad min-h-screen relative">
      <div className="h-56 bg-red absolute w-full compare">
        <Component />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="md:w-1/2 text-white text-center md:text-right">
            <h1 className="text-4xl text-[#000000] font-bold mb-4">
              Welcome to Munchkin Koneko
            </h1>
            <p className="text-xl mb-8">
              The future of crypto is here. Munchkin Koneko is a revolutionary
              new token that will change the way you think about finance.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mb-8">
              <button
                onClick={() => handleTabClick(1)}
                className={`${
                  currentTab === 1
                    ? "bg-[#000000] text-white"
                    : "text-[#000000]"
                } rounded-full py-3 px-6 font-semibold hover:bg-[#000000] hover:text-white transition-all duration-200`}
              >
                Q1 2022
              </button>
              <button
                onClick={() => handleTabClick(2)}
                className={`${
                  currentTab === 2
                    ? "bg-[#000000] text-white"
                    : "text-[#000000]"
                } rounded-full py-3 px-6 font-semibold hover:bg-[#000000] hover:text-white transition-all duration-200`}
              >
                Q2 2022
              </button>
              <button
                onClick={() => handleTabClick(3)}
                className={`${
                  currentTab === 3
                    ? "bg-[#000000] text-white"
                    : "text-[#000000]"
                } rounded-full py-3 px-6 font-semibold hover:bg-[#000000] hover:text-white transition-all duration-200`}
              >
                Q3 2022
              </button>
            </div>
            <div className="text-left">
              {currentTab === 1 && (
                <ul className="list-disc list-inside mb-8 text-lg">
                  <li>
                    <IoMdPaw />
                    Launch of Munchkin Koneko token
                  </li>
                  <li>
                    <IoMdPaw />
                    Partnerships with leading DeFi platforms
                  </li>
                  <li>
                    <IoMdPaw />
                    Listing on major crypto exchanges
                  </li>
                </ul>
              )}
              {currentTab === 2 && (
                <ul className="list-disc list-inside mb-8 text-lg">
                  <li>
                    <IoMdPaw />
                    Expansion of the Munchkin Koneko team
                  </li>
                  <li>
                    <IoMdPaw />
                    Development of the Munchkin Koneko app
                  </li>
                  <li>
                    <IoMdPaw />
                    Integration with popular wallets
                  </li>
                </ul>
              )}
              {currentTab === 3 && (
                <ul className="list-disc list-inside mb-8 text-lg">
                  <li>
                    <IoMdPaw />
                    Launch of the Munchkin Koneko debit card
                  </li>
                  <li>
                    <IoMdPaw />
                    Expansion into new markets
                  </li>
                  <li>
                    <IoMdPaw />
                    Continued development and innovation
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 items-center flex image-container">
            <Image
              src={Logo}
              alt="Roadmap on macbook"
              className="fade-in m-auto"
            />
            <div
              className="overlay bg-red"
              style={{
                backgroundImage:
                  currentTab === 1
                    ? `url(https://t3.ftcdn.net/jpg/02/05/50/68/360_F_205506807_yOIjKhGr2DTRVDwDPJHTqTKQvIGGyuVm.jpg)`
                    : currentTab === 2
                    ? `url(https://www.shutterstock.com/image-vector/manga-eyes-looking-paper-tear-600w-1523804378.jpg)`
                    : `url(https://www.shutterstock.com/image-vector/silhouette-murder-knife-vector-guy-600w-2258731257.jpg)`,
              }}
            >
              HElLO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
