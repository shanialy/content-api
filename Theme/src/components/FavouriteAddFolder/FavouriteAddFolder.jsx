import React from "react";
import Input from "../Input/Input";
import ButtonCircle from "../Button/ButtonCircle";

const FavouriteAddFolder = () => {
  const RemoveClick = () => {
    alert("Remove Button Clicked");
  };
  const SaveClick = () => {
    alert("Save Button Clicked");
  };
  return (
    <form className="mt-8 relative max-w-[17%]">
      <Input
        rounded="rounded-md"
        required
        aria-required
        placeholder="Enter your email"
        type="email"
      />
      <ButtonCircle
        onClick={RemoveClick}
        type="submit"
        className="absolute transform top-1/2 -translate-y-1/2 right-1"
      >
        <i className="la la-remove text-red-700"></i>
      </ButtonCircle>
      <ButtonCircle
        onClick={SaveClick}
        type="submit"
        className="absolute transform top-1/2 -translate-y-1/2 right-7"
      >
        <i className="las la-check text-green-700"></i>
        
      </ButtonCircle>
    </form>
  );
};

export default FavouriteAddFolder;
