import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 250,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 250,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 250,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
