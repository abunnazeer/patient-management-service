const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  diagnoses: [
    {
      condition: String,
      diagnosedDate: Date,
    },
  ],
  medications: [
    {
      name: String,
      dosage: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  labResults: [
    {
      test: String,
      result: String,
      date: Date,
    },
  ],
  appointments: [
    {
      date: Date,
      reason: String,
      doctor: String,
    },
  ],
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
