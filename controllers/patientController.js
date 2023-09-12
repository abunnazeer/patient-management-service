const Patient = require('../models/patientModel'); // Adjust the path as needed

exports.createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const result = await newPatient.save();
    res.status(201).json({ message: 'Patient created successfully', result });
  } catch (err) {
    res.status(400).json({ message: 'Error creating patient', error: err });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching patients', error: err });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching patient', error: err });
  }
};

exports.updatePatientById = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPatient)
      return res.status(404).json({ message: 'Patient not found' });
    res
      .status(200)
      .json({ message: 'Patient updated successfully', updatedPatient });
  } catch (err) {
    res.status(400).json({ message: 'Error updating patient', error: err });
  }
};

exports.deletePatientById = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient)
      return res.status(404).json({ message: 'Patient not found' });
    res
      .status(200)
      .json({ message: 'Patient deleted successfully', deletedPatient });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting patient', error: err });
  }
};
