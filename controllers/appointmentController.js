const Appointment = require('../models/appointmentModel');

exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: 'Error creating appointment', error });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching appointments', error });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching appointment', error });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: 'Error updating appointment', error });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(
      req.params.id
    );
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res
      .status(200)
      .json({ message: 'Appointment deleted', deletedAppointment });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting appointment', error });
  }
};
