const express = require('express');
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
} = require('../controllers/patientController');

const router = express.Router();



router.post('/create', createPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatientById);
router.delete('/:id', deletePatientById);
module.exports = router;
