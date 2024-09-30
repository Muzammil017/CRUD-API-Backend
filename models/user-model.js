import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8,"password must be at least 8 characters"],
    },
    image:{
        type: String,
    },
     //role based user field
     role: {
        type: String,
        enum: ["customer", "admin", "superAdmin"],
        default: "customer",
    }

},{
    timestamps: true,
});

let user = mongoose.model("user", userSchema);

export default user