const express = require('express');
const dotenv =require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Load environment variables

const app = express();


dotenv.config({ path: './config.env' });
// console.log(process.env);  // Debugging line
// console.log('DB_ENCRYPTION_KEY from env:', process.env.DB_ENCRYPTION_KEY);
// console.log('DB_SIGNING_KEY from env:', process.env.DB_SIGNING_KEY);

const dbURI = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
  );
  
  

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// Patient Routes
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/medicalRecords', medicalRecordRoutes);
// Mount the appointment routes
app.use('/api/v1/appointments', appointmentRoutes);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
