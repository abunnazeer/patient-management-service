
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

if (!process.env.DB_ENCRYPTION_KEY || !process.env.DB_SIGNING_KEY) {
  throw new Error(
    'DB_ENCRYPTION_KEY and DB_SIGNING_KEY must be set in the .env file'
  );
}

const encKey = Buffer.from(process.env.DB_ENCRYPTION_KEY, 'base64');
const sigKey = Buffer.from(process.env.DB_SIGNING_KEY, 'base64');

if (encKey.length !== 32 || sigKey.length !== 64) {
  throw new Error('DB_ENCRYPTION_KEY and DB_SIGNING_KEY must be 32 bytes long');
}

const patientSchema = new mongoose.Schema({
  patientID: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'MALE', 'FEMALE', 'OTHER'],
    required: true,
  },
  contact: {
    phone: String,
    email: String,
    address: String,
  },
  medicalHistory: {
    allergies: [String],
    currentMedications: [String],
    chronicConditions: [String],
  },
  insuranceDetails: {
    provider: String,
    policyNumber: String,
  },
  emergencyContact: {
    name: String,
    relation: String,
    phone: String,
  },
  healthRecords: {
    type: String,
    required: true,
  },
});

// const encryptHealthRecords = (value) => {
//   // Your encryption logic here
//   // For demonstration, just reversing the string
//   return value.split('').reverse().join('');
// };

// // Add pre hook for findOneAndUpdate
// patientSchema.pre('findOneAndUpdate', function (next) {
//   if (this._update.healthRecords) {
//     this._update.healthRecords = encryptHealthRecords(
//       this._update.healthRecords
//     );
//   }
//   next();
// });
patientSchema.plugin(encrypt, {
  encryptionKey: encKey,
  signingKey: sigKey,
  encryptedFields: ['healthRecords'],
});



module.exports = mongoose.model('Patient', patientSchema);
