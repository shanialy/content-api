import express from "express";
import connectDatabase from "./src/config/databaseConnection.js";
import { checkConnection } from "./src/config/elasticSearchConnection.js";
import user from "./src/routes/api/userRoutes/user.Route.js";
import favouritesFolder from "./src/routes/api/addToFavouriteRoutes/favouritesFolder.Route.js";
import favouritePosts from "./src/routes/api/addToFavouriteRoutes/favouritePost.Route.js";
import articleSearch from "./src/routes/api/articleSearchRoutes/articleSearch.Routes.js"
import customTopicSearch from "./src/routes/api/customTopicSearchRoutes/customTopicSearch.Route.js"
// cache
import {clearHash} from "./src/controllers/cachingControllers/redis.Controller.js";

const port = process.env.PORT || 7777;


const app =  express();


connectDatabase();
checkConnection();

app.use(express.json());
app.use("/api/user", user);
app.use("/api/favouritesFolder", favouritesFolder);
app.use("/api/favouritePosts", favouritePosts);
app.use("/api/articleSearch", articleSearch);
app.use("/api/customTopicSearch", customTopicSearch);



app.listen(port, ()=> console.log("server running on port# " + port));