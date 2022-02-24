import LayoutPage from "../../components/LayoutPage/LayoutPage";
import React, { ComponentType, FC, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
// import DashboardBillingAddress from "./DashboardBillingAddress";
// import DashboardPosts from "./DashboardPosts";
// import DashboardSubcription from "./DashboardSubcription";
import { Helmet } from "react-helmet";
import CreateFolderModal from "../../components/CreateFolderModal/createFolderModal";
import { useGetAllFoldersQuery } from "../../app/Api/contentApi";

const subPages = [
  {
    sPath: "/root",
    exact: true,
    // component: DashboardRoot,
    pageName: "Dash board",
  },
  {
    sPath: "/edit-profile",
    // component: DashboardEditProfile,
    pageName: "Edit profile",
  },
  {
    sPath: "/subscription",
    // component: DashboardSubcription,
    pageName: "Subscription",
  },
  {
    sPath: "/billing-address",
    // component: DashboardBillingAddress,
    pageName: "Billing address",
  },
  {
    sPath: "/submit-post",
    // component: DashboardSubmitPost,
    pageName: "Submit post",
  },
  {
    sPath: "/posts",
    // component: DashboardPosts,
    pageName: "Posts",
  },
];

const TopicsPage = ({ className = "" }) => {
  const getAllFolders = useGetAllFoldersQuery();
  let { path, url } = useRouteMatch();
  console.log(getAllFolders.data);

  const [showModal, setshowModal] = useState(false);

  const closeModal = () => setshowModal(false);
  const showModalOnClick = () => setshowModal(true);

  return (
    <div className={`nc-PageDashboard ${className}`} data-nc-id="PageDashboard">
      <Helmet>
        <title>Dashboard || Blog Magazine React Template</title>
      </Helmet>
      <LayoutPage
        subHeading="View your dashboard, manage your Posts, Subscription, edit password and profile"
        headingEmoji="⚙"
        heading="Dash board"
      >
        <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
          {/* SIDEBAR */}

          <div className="flex-shrink-0 max-w-xl xl:w-70 xl:pr-8">
            <ul className="text-base space-y-1 text-neutral-6000 dark:text-neutral-400">
              <li className="flex flex-row justify-center items-center">
                <p className="flex px-6 py-2.5 font-medium rounded-lg text-[#666666]">
                  CURATED TOPICS
                </p>
                <button
                  onClick={showModalOnClick}
                  className="flex flex-row justify-center items-end rounded p-1 h-6 font-bold text-[25px] bg-gray-300 text-[#8c8c8c] hover:text-indigo-600"
                >
                  +
                </button>
              </li>

              {getAllFolders.data?.map(({folderName,_id}, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          className="flex px-6 py-2.5 font-medium text-[#8c8c8c] hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                          to={`/topics/${_id}`}
                          activeClassName="bg-indigo-50 text-[#000000] dark:bg-neutral-800 dark:text-neutral-900"
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
