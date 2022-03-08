import React, { ButtonHTMLAttributes } from "react";
import twFocusClass from "../../utils/twFocusClass";

// export interface ButtonCircleProps
//   extends ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: string;
// }

const ButtonCircle = ({ className = " ", size = " w-7 h-7 ", ...args }) => {
  return (
    <button
      // className={
      //   `ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 text-neutral-50 ${className} ${size} ` +
      //   twFocusClass(true)
      // }
      className={
        `ttnc-ButtonCircle flex items-center justify-center !leading-none disabled:bg-opacity-10 text-neutral-50 ${className} ${size} `
      }
      {...args}
    />
  );
};

export default ButtonCircle;
