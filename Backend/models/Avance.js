// import mongoose
const mongoose = require('mongoose');

const AvnaceSchema = mongoose.Schema({
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true
    },
    fechaAvance: {
        type: Date,
        default: Date.now()
    },
    descripcion: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    },
    creadoPor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
})

module.exports = mongoose.model('Avance', AvnaceSchema);