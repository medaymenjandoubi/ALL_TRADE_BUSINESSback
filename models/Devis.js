const mongoose = require("mongoose");
const { Schema } = mongoose;

const devisSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String },
  siret: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  zip: { type: String },
  city: { type: String },
  country: { type: String },
  service: { type: String, required: true },
  projectDescription: { type: String },
  quantity: { type: Number },
  specifications: { type: String },
  frequency: { type: String },
  deliveryLocation: { type: String },
  deliveryDate: { type: Date },
  budget: { type: Number },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Devis", devisSchema);
