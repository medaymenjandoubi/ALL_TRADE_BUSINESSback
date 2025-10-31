const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
  try {
const {
  lastName,
  name,
  email,
  message,
} = req.body;

if (
  !lastName ||
  !email ||
  !message ||
  !name
) {
  return res.status(400).json({ error: "Tous les champs sont requis" });
}

const newMessage = new Message({
  lastName,
  name,
  email,
  message,
});

    await newMessage.save();

    res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    res.status(500).json({ error: error });
  }
};
