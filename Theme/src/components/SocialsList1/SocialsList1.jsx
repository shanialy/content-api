import { SOCIALS_2 } from "../SocialsList/SocialsList";
import { SocialType } from "../SocialsShare/SocialsShare";
import React, { FC } from "react";

// export interface SocialsList1Props {
//   className?: string;
// }

const socials = SOCIALS_2;

const SocialsList1 = ({ className = "space-y-2.5" }) => {
  const renderItem = (item, index) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
