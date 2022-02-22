import mongoose from "mongoose";
const connectDatabase = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/cognilium');
        await mongoose.connect('mongodb://43.251.253.107:1600/contentgizmo');
        console.log("database connected without any issue");
    }catch(err){
        console.log("ERROR OCCOURED WHILE CONNECTING TO DATABASE", err);
    }
 
};


export default connectDatabase;