import React from "react";
import { IconType } from "react-icons/lib";
import { IconContext } from "react-icons";
import classnames from "classnames";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames(
        "inline-block text-white-600 p-0.5 hover:text-white transition-colors duration-200",
        className
      )}
    >
      <IconContext.Provider value={{ size: "2.5em" }}>
        <Icon />
      </IconContext.Provider>
    </a>
  );
};

export default SocialLink;
