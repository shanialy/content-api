import express from "express";
import connectDatabase from "./src/config/databaseConnection.js";
import { checkConnection } from "./src/config/elasticSearchConnection.js";
import user from "./src/routes/api/user.js";
import favouritesFolder from "./src/routes/api/favouritesFolder.js";
import favouritePosts from "./src/routes/api/favouritePosts.js";
import article from "./src/routes/api/articles.js"
import customTopics from "./src/routes/api/customTopics.js"

const port = process.env.PORT || 7777;


const app =  express();


connectDatabase();
checkConnection();

app.use(express.json());
app.use("/api/user", user);
app.use("/api/favouritesFolder", favouritesFolder);
app.use("/api/favouritePosts", favouritePosts);
app.use("/api/article", article);
app.use("/api/customTopics", customTopics);



app.listen(port, ()=> console.log("server running on port# " + port));