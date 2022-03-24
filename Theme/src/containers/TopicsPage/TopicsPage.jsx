import LayoutPage from "../../components/LayoutPage/LayoutPage";
import React, { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopicSubmitPost from "./TopicSubmitPost";
import EditCustomTopicForm from "./EditCustomTopicForm";
import CreateFolderModal from "../../components/CreateFolderModal/createFolderModal";
import {
  useGetAllFoldersQuery,
  useGetAllFavouritePostsQuery,
  useGetAllCustomTopicsQuery,
  useDeleteCustomTopicMutation,
  useDeleteFolderMutation,
  useUpdateFolderMutation,
} from "../../app/Api/contentApi";
import ButtonCircle from "../../components/Button/ButtonCircle";
import Input from "../../components/Input/Input";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card12 from "../../components/Card11/Card12";

const TopicsPage = ({ className = "" }) => {
  const history = useHistory();
  const [folderID, setFolderID] = useState();
  const [Id, setId] = useState();
  const [showModal, setshowModal] = useState(false);

  let { path, url } = useRouteMatch();

  const getAllFolders = useGetAllFoldersQuery();
  const cardData = useGetAllFavouritePostsQuery(folderID);
  //For CustomTopic
  const getAllCustomTopics = useGetAllCustomTopicsQuery();
  const customData = useGetAllCustomTopicsQuery(Id);
  // const getAllCustomPosts = useGetAllCustomTopicsQuery(Id);

  var [deletePost, { isLoading, isError }] = useDeleteCustomTopicMutation();

  // handlers
  const closeModal = () => setshowModal(false);
  const showModalOnClick = () => setshowModal(true);

  var [deleteFolder, { isLoading, isError }] = useDeleteFolderMutation();
  var [updateFolder, { isLoading, isError }] = useUpdateFolderMutation();

  const [toggleButtonsHide, setToggleButtonsHide] = useState(false);
  const [toggleButtonsHideId, setToggleButtonsHideId] = useState("");

  const [folderNameState, setFolderNameState] = useState("");
  const [toggleFolderNameHide, setToggleFolderNameHide] = useState(false);
  const [toggleFolderNameHideId, setToggleFolderNameHideId] = useState("");

  const RemoveClick = (e) => {
    e.preventDefault();

    setToggleFolderNameHide(false);
    setToggleFolderNameHideId("");
  };

  const SaveClick = async (e) => {
    e.preventDefault();
    if (toggleFolderNameHideId !== "" && folderNameState !== "") {
      await updateFolder({
        id: toggleFolderNameHideId,
        folderName: folderNameState,
      });
    }
    setToggleFolderNameHide(false);
    setToggleFolderNameHideId("");
  };

  return (
    <div className={`nc-PageDashboard ${className}`} data-nc-id="PageDashboard">
      <Helmet>
        <title>Curated Topics</title>
      </Helmet>

      <LayoutPage
        subHeading="View your dashboard, manage your Posts, Subscription, edit password and profile"
        headingEmoji="⚙"
        heading="Dash board"
      >
        <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
          {/* SIDEBAR  */}

          <div className="flex-shrink-0 max-w-xl xl:w-70 xl:pr-8">
            {/* CUSTOM TOPICS */}

            <ul className="text-base space-y-1 text-neutral-6000 dark:text-neutral-400">
              <li className="flex flex-row justify-start items-center">
                <p className="flex px-6 py-2.5 font-medium rounded-lg text-[#666666]">
                  CUSTOM TOPICS
                </p>
                <button
                  onClick={() => history.push(`${url}/submit-post`)}
                  className="flex flex-row justify-center items-end rounded p-1 h-6 font-bold text-[25px] bg-gray-300 text-[#8c8c8c] hover:text-indigo-600"
                >
                  +
                </button>
              </li>
              {getAllCustomTopics.data?.map(({ name, _id }, index) => {
                return (
                  <li key={index}>
                    <div
                      className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                      activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
                    >
                      {name}
                      <NavLink
                        // className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                        activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
                        to={`${url}/custom_topics/${_id}`}
                        onClick={() => {
                          setId(_id);
                        }}
                      >
                        <button className="flex flex-row justify-center items-end rounded ml-4 p-1 h-6 font-bold text-[15px]  text-[#8c8c8c] hover:text-indigo-600">
                          📝
                        </button>
                      </NavLink>

                      <button
                        onClick={(e) => {
                          deletePost({ id: _id });
                        }}
                        className="flex flex-row justify-center items-end rounded p-1 ml-2 h-6 font-bold text-[10px]  text-[#8c8c8c] hover:text-indigo-600"
                      >
                        ❌
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <ul className="text-base space-y-1 text-neutral-6000 dark:text-neutral-400">
              <li className="flex flex-row justify-start items-center">
                <p className="flex px-6 py-2.5 font-medium rounded-lg text-[#666666]">
                  FAVOURITES
                </p>
                <button
                  onClick={showModalOnClick}
                  className="flex flex-row justify-center items-end rounded p-1 h-6 font-bold text-[25px] bg-gray-300 text-[#8c8c8c] hover:text-indigo-600 "
                >
                  +
                </button>
              </li>

              {getAllFolders.data?.map(({ folderName, _id }, index) => {
                return (
                  <>
                    {toggleFolderNameHide && toggleFolderNameHideId === _id ? (
                      <form className="mt-0 relative max-w-[80%]" key={_id}>
                        <Input
                          rounded="rounded-md"
                          aria-required
                          value={folderNameState}
                          onChange={(e) => setFolderNameState(e.target.value)}
                          placeholder="folder Name"
                          type="text"
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
                    ) : (
                      <li key={_id}>
                        <NavLink
                          className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                          activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
                          // to={`/topics/${_id}`}
                          to={`${url}/favourite-posts/${_id}`}
                          onClick={() => {
                            setFolderID(_id);
                          }}
                          onMouseEnter={(e) => {
                            setToggleButtonsHide(true);
                            setToggleButtonsHideId(_id);
                          }}
                          onMouseLeave={(e) => {
                            setToggleButtonsHide(false);
                            setToggleButtonsHideId("");
                          }}
                        >
                          {folderName}

                          <span style={{ marginLeft: "20px" }}>
                            {toggleButtonsHide &&
                            toggleButtonsHideId === _id ? (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();

                                    setFolderNameState(folderName);
                                    setToggleFolderNameHide(true);
                                    setToggleFolderNameHideId(_id);
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faPen}
                                    style={{ color: "gray", fontSize: "10px" }}
                                  />
                                </button>

                                <button
                                  style={{ paddingLeft: "12px" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    deleteFolder({ id: _id });
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrashCan}
                                    style={{ color: "red", fontSize: "10px" }}
                                  />
                                </button>
                              </>
                            ) : null}
                          </span>
                        </NavLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>

          <div className="border border-neutral-100 dark:border-neutral-800 md:hidden"></div>
          <div className="flex-grow">
            <CreateFolderModal
              show={showModal}
              onCloseModalReportItem={closeModal}
            />

            <Switch>
              <Route
                path={`${path}/custom_topics/:id`}
                render={() => {
                  return (
                    <>
                      {customData?.isFetching == false &&
                        customData?.data?.map((values, index) => {
                          if (
                            values._id == Id &&
                            customData?.isSuccess == true
                          ) {
                            return (
                              <>
                                {values && (
                                  <EditCustomTopicForm topicData={values} />
                                )}
                              </>
                            );
                          }
                        })}
                    </>
                  );
                }}
              />
              <Route
                path={`${path}/favourite-posts/:id`}
                render={() => {
                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mt-8 lg:mt-10">
                      {cardData?.data?.map((value, index) => {
                        console.log(value);
                        return (
                          <>
                            <Card12 key={index} cardItems={value} />
                          </>
                        );
                      })}
                    </div>
                  );
                }}
              />

              <Route
                exact
                path={`${path}/submit-post`}
                component={TopicSubmitPost}
              />
              <Redirect to={"/topics"} />
            </Switch>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default TopicsPage;
