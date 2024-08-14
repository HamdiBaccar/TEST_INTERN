const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    description: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    image: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    location: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    attendance: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    month: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    day: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    price: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    category: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
}, {
    timestamps: true      // Ajoute createdAt et updatedAt automatiquement
},);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
