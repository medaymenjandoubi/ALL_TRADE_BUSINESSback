const Devis = require("../models/Devis");

// Create a new Devis
exports.createDevis = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      company,
      siret,
      email,
      phone,
      address,
      zip,
      city,
      country,
      service,
      projectDescription,
      quantity,
      specifications,
      frequency,
      deliveryLocation,
      deliveryDate,
      budget,
      notes,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service) {
      return res.status(400).json({ error: "Les champs nom, prénom, email et service sont obligatoires." });
    }

    // Create new Devis
    const newDevis = new Devis({
      firstName,
      lastName,
      company,
      siret,
      email,
      phone,
      address,
      zip,
      city,
      country,
      service,
      projectDescription,
      quantity,
      specifications,
      frequency,
      deliveryLocation,
      deliveryDate, // ISO string
      budget,
      notes,
      createdAt: new Date(),
    });

    await newDevis.save();

    res.status(201).json({ message: "Demande de devis envoyée avec succès !" });
  } catch (error) {
    console.error("Erreur création devis :", error);
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};
