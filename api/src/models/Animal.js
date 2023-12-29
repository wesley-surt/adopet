import mongoose from 'mongoose';

const animalsSchema = mongoose.Schema(
  {
    id: { type: String },
    photo: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: String },
    size: { type: String },
    characteristics: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    profileId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'animals' },
    about: { type: String },
  }
)

const animals = mongoose.model('animals', animalsSchema);

export default animals;
