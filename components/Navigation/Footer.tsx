import React from "react";
import Image from "next/image";

import logo from "../../public/res/headlogo_S.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import SocialLink from "../comps/SocialLinks";

const NavBarItem = ({
  title,
  classprops,
}: {
  title: String;
  classprops: String;
}) => <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full container flex sm:flex-row flex-col justify-between items-center my-4">
      <ul className="text-black md:flex list-none flex-row justify-between items-center flex-initial">
        <div className="py-2">
          <SocialLink
            href={"https://twitter.com/MunchkinKoneko"}
            icon={AiFillTwitterCircle}
          />
          <SocialLink href={"https://t.me/MunchkinKoneko"} icon={FaTelegram} />
          <SocialLink href={"https://discord.gg/JVzvXXXhy8"} icon={FaDiscord} />
          <SocialLink href={"www.twitter.com"} icon={SiEthereum} />
        </div>
      </ul>
      <div className="flex justify-center my-auto md:ml-auto mr-0 items-center">
        <Image src={logo} alt="logo" className="w-24" loading="lazy" />
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@kryptomastery.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@kryptomastery2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
