import mongoose from "mongoose";
const connectDatabase = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/cognilium');
        await mongoose.connect('mongodb://u7cvrwruvcbgxsvqlazu:SSctSWLSWEAxy6J9NZJr@bpwcrewwozp7mtr-mongodb.services.clever-cloud.com:27017/bpwcrewwozp7mtr'); 
        // await mongoose.connect('mongodb://43.251.253.107:1600/contentgizmo');
        console.log("database connected without any issue");
    }catch(err){
        console.log("ERROR OCCOURED WHILE CONNECTING TO DATABASE", err);
    }
 
};


export default connectDatabase;