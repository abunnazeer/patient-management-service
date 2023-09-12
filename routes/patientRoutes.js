const express = require('express');
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
} = require('../controllers/patientController');

const router = express.Router();



router.post('/create-patient', createPatient);
router.get('/get-all-patients', getAllPatients);
router.get('/get-patient/:id', getPatientById);
router.put('/update-patient/:id', updatePatientById);
router.delete('/delete-patient/:id', deletePatientById);
module.exports = router;
