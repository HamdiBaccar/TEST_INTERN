const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    },
    description: {
        type: String,
        trim: true       // Supprime les espaces en début et en fin de chaîne
    }
}, {
    timestamps: true      // Ajoute createdAt et updatedAt automatiquement
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
