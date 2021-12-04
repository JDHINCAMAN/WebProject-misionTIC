const mongoose = require("mongoose");

const InscripcionSchema = mongoose.Schema({
  estado: {
    type: Boolean,
    required: true,
  },

  fechaIngreso: {
    type: Date,
    default: Date.now(),
  },

  fechaEgreso: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Inscripcion", InscripcionSchema);
