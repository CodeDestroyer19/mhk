import React from "react";
import Image from "next/image";
import Lottie from "react-lottie-player";
import img from "../../public/res/iphoneMock.png";
import SocialLink from "../comps/SocialLinks";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import lottieJson from "../../utils/happy-etherium.json";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.75px] border-black text-sm font-light text-white";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/2">
            <Image
              src={img}
              alt="Munchkin Koneko logo on iphone"
              className="fade-in"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Welcome to Munchkin Koneko
            </h1>
            <p className="text-lg mb-8 text-white">
              The future of crypto is here. Munchkin Koneko is a revolutionary
              new token that will change the way you think about finance.
            </p>

            {/* <div className="absolute ">
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 200, height: "auto" }}
              />
            </div> */}
            <div className="py-2">
              <SocialLink
                href={"https://twitter.com/MunchkinKoneko"}
                icon={AiFillTwitterCircle}
              />
              <SocialLink
                href={"https://t.me/MunchkinKoneko"}
                icon={FaTelegram}
              />
              <SocialLink
                href={"https://discord.gg/JVzvXXXhy8"}
                icon={FaDiscord}
              />
              <SocialLink href={"www.twitter.com"} icon={SiEthereum} />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center items-center">
          <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Send Crypto <br /> across the world
              </h1>
              <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                Explore the crypto world. Buy and sell cryptocurrencies easily
                on Krypto.
              </p>

              <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                  Reliability
                </div>
                <div className={companyCommonStyles}>Security</div>
                <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                  Ethereum
                </div>
                <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                  Web 3.0
                </div>
                <div className={companyCommonStyles}>Low Fees</div>
                <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                  Blockchain
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 h-full">
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                  <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                      </div>
                      <BsInfoCircle fontSize={17} color="#fff" />
                    </div>
                    <div>
                      <p className="text-white font-light text-sm">
                        {/* {shortenAddress(currentAccount)} */}
                      </p>
                      <p className="text-white font-semibold text-lg mt-1">
                        Ethereum
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-white h-full w-full mt-2 border-[2px] p-2 border-[#fd644f] hover:bg-[#000000] hover:border-[#000000] transition-all duration-200 rounded-full cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
