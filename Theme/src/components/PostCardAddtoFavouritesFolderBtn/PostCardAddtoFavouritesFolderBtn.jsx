import React, {useState} from "react"
import { HeartIcon as HeartSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
import AddToFavouritesFolderModal from "../AddToFavouritesFolderModal/AddToFavouritesFolderModal";

const PostCardAddtoFavouritesFolderBtn = () => {
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => setshowModal(false);
  const showModalOnClick = () => setshowModal(true);

  return (
    <>
      <button className="flex justify-center items-center" title="Add_to_favourites" onClick={showModalOnClick}>
        <HeartOutline className="w-5 h-5 ml-6 hover:bg-red-500 rounded-full" />
        {/* <HeartSolid className="w-5 h-5 ml-6 text-red-600"/> */}
      </button>
      <AddToFavouritesFolderModal show={showModal} onCloseModalReportItem={closeModal} />
    </>
  );
};

export default PostCardAddtoFavouritesFolderBtn;
