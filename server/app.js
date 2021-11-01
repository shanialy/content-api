import express from "express";
import connectDatabase from "./src/config/databaseConnection.js"
import user from "./src/routes/api/user.js"
import favouritesFolder from "./src/routes/api/favouritesFolder.js"



const app =  express();
const port = process.env.PORT || 7777

connectDatabase();

app.use(express.json());
app.use("/api/user", user);
app.use("/api/favouritesFolder", favouritesFolder);



app.listen(port, ()=> console.log("server running on port# " + port));