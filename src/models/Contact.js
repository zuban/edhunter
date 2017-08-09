const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
