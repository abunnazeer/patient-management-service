const express = require('express');
const {
  createMedicalRecord,
  getAllMedicalRecords,
  getMedicalRecordById,
  updateMedicalRecord,
  deleteMedicalRecord,
} = require('../controllers/medicalRecordController');

const router = express.Router();

router.post('/create-medical-records', createMedicalRecord);
router.get('/gell-all-medical-records', getAllMedicalRecords);
router.get('/get-medical-record/:id', getMedicalRecordById);
router.put('/update-medical-record/:id', updateMedicalRecord);
router.delete('/delete-medical-record/:id', deleteMedicalRecord);

module.exports = router;