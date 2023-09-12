const express = require('express');
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

router.post('/create-appointment', createAppointment);
router.get('/get-all-appointments', getAllAppointments);
router.get('/get-appointment/:id', getAppointmentById);
router.put('/update-appointment/:id', updateAppointment);
router.delete('/delete-appointment/:id', deleteAppointment);

module.exports = router;
