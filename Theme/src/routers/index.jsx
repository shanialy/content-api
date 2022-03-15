import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageSearch from "../containers/PageSearch/PageSearch";
import ScrollToTop from "./ScrollToTop";
import Footer from "../components/Footer/Footer";
import PageLogin from "../containers/PageLogin/PageLogin";
import PageSignUp from "../containers/PageSignUp/PageSignUp";
import PageForgotPass from "../containers/PageForgotPass/PageForgotPass";
import PageDashboard from "../containers/PageDashboard/PageDashboard";
import PageSearchV2 from "../containers/PageSearch/PageSearchV2";
import MainNav1 from "../components/Header/MainNav1";
import PageContentFeed from "../containers/PageContentFeed/PageContentFeed";
import PageHome from "../containers/PageHome/PageHome";
import Analytics from "../containers/Analytics/Analytics"
import TopicsPage from "../containers/TopicsPage/TopicsPage"
import PageSingleTemplate3 from "../containers/PageSingle/PageSingleTemp3";


const Routes = () => {
  return (
    <BrowserRouter

    >
      <ScrollToTop />
      <MainNav1 />

      {/* <HeaderContainer /> */}

      <Switch>        
      <Route exact path={"/"} component={PageHome}/>
      <Route exact path={"/search/mainpostpage/:id"} component={PageSingleTemplate3} />

      <Route path={"/login"} component={PageLogin} /> 
      <Route path={"/signup"} component={PageSignUp} /> 
      <Route path={"/forgot-pass"} component={PageForgotPass} /> 
      <Route path={"/dashboard"} component={PageDashboard} />
      <Route path={"/search"} component={PageSearch} />
      <Route path={"/search-v2"} component={PageSearchV2} />
      <Route path={"/content-feed"} component={PageContentFeed} />
      <Route path={"/analytics"} component={Analytics} />
      {/* <Route path={"/category/:label"} component={CategoryCardShow}/> */}
      <Route  exact path={"/topics"} component={TopicsPage} />

        
        {/* <Route component={Page404} />  */}
      </Switch>
      <Footer />

    </BrowserRouter>
  );
};

export default Routes;
