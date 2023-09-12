const MedicalRecord = require('../models/medicalRecordModel');

exports.createMedicalRecord = async (req, res) => {
  const newRecord = await MedicalRecord.create(req.body);
  res.status(201).json({ status: 'success', data: newRecord });
};

exports.getAllMedicalRecords = async (req, res) => {
  const records = await MedicalRecord.find();
  res.status(200).json({ status: 'success', data: records });
};

exports.getMedicalRecord = async (req, res) => {
  const record = await MedicalRecord.findById(req.params.id);
  res.status(200).json({ status: 'success', data: record });
};

exports.updateMedicalRecord = async (req, res) => {
  const updatedRecord = await MedicalRecord.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ status: 'success', data: updatedRecord });
};

exports.deleteMedicalRecord = async (req, res) => {
  await MedicalRecord.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: 'success', data: null });
};
