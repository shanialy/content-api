import mongoose from "mongoose"
const schema = mongoose.Schema;

const refreshTokenSchema =  new mongoose.Schema({

    userId: {
        type: schema.Types.ObjectId,
        ref: "user" 
    },
    token: String,
    expires: Date,
    created:{
        type: Date,
        default: Date.now()
    },
    createdByIp: String,
    revoked: Date,
    revokedByIp: String,
    repalcedByToken: String
}); 

refreshTokenSchema.virtual("isExpired").get(function(){
    return Date.now() >= this.expires;
});

refreshTokenSchema.virtual("isActive").get(function(){
    return !this.revoked && !this.isExpired
});

const refreshTokenModel = mongoose.model("refreshToken", refreshTokenSchema);
export default refreshTokenModel;