import mongoose from "mongoose";

const animalsSchema = mongoose.Schema({
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        required: true,
        ref: "users",
    },
    photo: { type: String, required: true },
    state: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    characteristics: { type: String },
    about: { type: String },
    size: { type: String },
    age: { type: String },
    id: { type: String },
});

const animals = mongoose.model("animals", animalsSchema);

export default animals;
