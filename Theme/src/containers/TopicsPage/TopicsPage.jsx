import LayoutPage from "../../components/LayoutPage/LayoutPage";
import React, { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopicSubmitPost from "./TopicSubmitPost";
import CreateFolderModal from "../../components/CreateFolderModal/createFolderModal";
import {
  useGetAllFoldersQuery,
  useGetAllFavouritePostsQuery,
} from "../../app/Api/contentApi";

const TopicsPage = ({ className = "" }) => {
  const history = useHistory();
  const [folderID, setFolderID] = useState();
  const [showModal, setshowModal] = useState(false);

  let { path, url } = useRouteMatch();
  const getAllFolders = useGetAllFoldersQuery();
  const getAllFavouritePosts = useGetAllFavouritePostsQuery(folderID);

  // handlers
  const closeModal = () => setshowModal(false);
  const showModalOnClick = () => setshowModal(true);

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
          {/* SIDEBAR */}
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
            </ul>

            {/* FAVOURITE FOLDERS SECTION */}
            <ul className="text-base space-y-1 text-neutral-6000 dark:text-neutral-400">
              <li className="flex flex-row justify-start items-center">
                <p className="flex px-6 py-2.5 font-medium rounded-lg text-[#666666]">
                  FAVOURITES
                </p>
                <button
                  onClick={showModalOnClick}
                  className="flex flex-row justify-center items-end rounded p-1 h-6 font-bold text-[25px] bg-gray-300 text-[#8c8c8c] hover:text-indigo-600"
                >
                  +
                </button>
              </li>

              {getAllFolders.data?.map(({ folderName, _id }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                      activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
                      // to={`/topics/${_id}`}
                      to={`${url}/favourite-posts/${_id}`}
                      onClick={() => setFolderID(_id)}
                    >
                      {/* <span className="w-8 mr-1">{emoij}</span> */}
                      {folderName}
                    </NavLink>
                  </li>
                );
              })}

              {
                // subPages.map(({ sPath, pageName, emoij }, index) => {
                //   return (
                //     <li key={index}>
                //       <NavLink
                //         className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                //         to={`${url}${sPath}`}
                //         activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
                //       >
                //         {/* <span className="w-8 mr-1">{emoij}</span> */}
                //         {pageName}
                //       </NavLink>
                //     </li>
                //   );
                // })
              }
            </ul>
          </div>
          <div className="border border-neutral-100 dark:border-neutral-800 md:hidden"></div>
          <div className="flex-grow">
            <CreateFolderModal
              show={showModal}
              onCloseModalReportItem={closeModal}
            />

            <Switch>

              {/* FAVOURITE POSTS ROUTE */}
              <Route
                path={`${path}/favourite-posts/:id`}
                render={() => {
                  return <p>{JSON.stringify(getAllFavouritePosts?.data)}</p>;
                }}
              />

              {/* SUBMIT POST PAGE ROUTE */}
              <Route
                exact
                path={`${path}/submit-post`}
                component={TopicSubmitPost}
              />
              <Redirect to={"/topics"} />
            </Switch>

            {/* <Switch>
              {subPages.map(({ component, sPath, exact }, index) => {
                return (
                  <Route
                    key={index}
                    exact={exact}
                    component={component}
                    path={!!sPath ? `${path}${sPath}` : path}
                  />
                );
              })}
              <Redirect to={path + "/root"} />
            </Switch> */}
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default TopicsPage;
