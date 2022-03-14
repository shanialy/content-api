import React, { useState } from "react";
import { HeartIcon as HeartSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
import AddToFavouritesFolderModal from "../AddToFavouritesFolderModal/AddToFavouritesFolderModal";
import { useSelector } from "react-redux";

const PostCardAddtoFavouritesFolderBtn = ({ setPostToRedux }) => {
  const [showModal, setshowModal] = useState(false);

  // handlers
  const closeModal = () => setshowModal(false);
  const showModalOnClick = () => setshowModal(true);

  const heartClickhandler = (e) => {
    showModalOnClick();
    setPostToRedux(e);
  };

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-rose-200 hover:text-rose-600 rounded-full"
        title="Add_to_favourites"
        onClick={(e) => heartClickhandler(e)}
      >
        <HeartOutline className="w-5 h-5 ml-4" />
        {/* <HeartSolid className="w-5 h-5 ml-6 text-red-600"/> */}
      </button>

      <AddToFavouritesFolderModal
        show={showModal}
        onCloseModalReportItem={closeModal}
      />
    </>
  );
};

export default PostCardAddtoFavouritesFolderBtn;
