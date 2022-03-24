import React from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// export interface SocialsShareProps {
//   className?: string;
//   itemClass?: string;
// }

// export interface SocialType {
//   id: string;
//   name: string;
//   icon: string;
//   href: string;
// }

const SocialsShare = () => {
  return <h1></h1>;
};

const socials = [
  { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f", href: "#" },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
  { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in", href: "#" },
  { id: "Instagram", name: "Instagram", icon: "lab la-instagram", href: "#" },
];

export const SOCIALS_DATA = socials;

export default SocialsShare;
