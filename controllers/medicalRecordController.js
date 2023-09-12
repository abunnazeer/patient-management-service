const MedicalRecord = require('../models/medicalRecordModel'); // Assuming your schema is in a file called 'MedicalRecord.js' in a folder named 'models'

// Create a new medical record
exports.createMedicalRecord = async (req, res) => {
  try {
    const newRecord = new MedicalRecord(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: 'Error creating medical record', error });
  }
};

// Get all medical records
exports.getAllMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find().populate('patientId');
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching medical records', error });
  }
};

// Get a single medical record by ID
exports.getMedicalRecordById = async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.id).populate(
      'patientId'
    );
    if (!record) {
      return res.status(404).json({ message: 'Medical record not found' });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching medical record', error });
  }
};

// Update a medical record
exports.updateMedicalRecord = async (req, res) => {
  try {
    const updatedRecord = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: 'Error updating medical record', error });
  }
};

// Delete a medical record
exports.deleteMedicalRecord = async (req, res) => {
  try {
    const deletedRecord = await MedicalRecord.findByIdAndRemove(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }
    res.status(200).json({ message: 'Medical record deleted', deletedRecord });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting medical record', error });
  }
};
