import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

const userModel = mongoose.model("user", userModelSchema);

export default userModel;