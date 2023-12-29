import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    telephone: { type: String },
    photo: { type: String },
    city: { type: String },
    state: { type: String },
    about: { type: String },
    id: { type: String },
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, default: null }
    // Vou manter esta linha apenas a título de aprendizado. Para não esquecer como se faz
});

const users = mongoose.model("user", userSchema);

export default users;
