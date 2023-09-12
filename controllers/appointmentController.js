const Appointment = require('../models/appointmentModel');

exports.createAppointment = async (req, res) => {
  const newAppointment = await Appointment.create(req.body);
  res.status(201).json({ status: 'success', data: newAppointment });
};

exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.status(200).json({ status: 'success', data: appointments });
};

exports.getAppointment = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  res.status(200).json({ status: 'success', data: appointment });
};

exports.updateAppointment = async (req, res) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ status: 'success', data: updatedAppointment });
};

exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: 'success', data: null });
};
