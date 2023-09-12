
# Patient Management Service

## Overview
The Patient Management Service is a key component of a larger Health Management System. It is designed to manage all patient-related functionalities, including appointment scheduling, medical records, and more.

## Features
- CRUD operations for Appointments and Medical Records
- API endpoints for managing and querying data
- Unit tests for ensuring data integrity and functionality

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Installation and Setup

1. **Clone the Repository**

   ```
   git clone https://github.com/your-username/patient-management-service.git
   ```

2. **Navigate to Directory**

   ```
   cd patient-management-service
   ```

3. **Install Dependencies**

   ```
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the root directory and add your environment variables.
   ```
   DB_URI=mongodb://localhost:27017/your-database
   PORT=3000
   ```

5. **Run the Service**

   ```
   npm start
   ```

## API Endpoints
### Petient

- **Create Petient**: `POST /api/create-petient`
- **Get All Petients**: `GET /api/get-all-petient`
- **Get Petient by ID**: `GET /api/get-petients/:id`
- **Update Petient**: `PUT /api/update-petient/:id`
- **Delete Petient**: `DELETE /api/delete-petient/:id`
### Appointments

- **Create Appointment**: `POST /api/create-appointment`
- **Get All Appointments**: `GET /api/get-all-appointments`
- **Get Appointment by ID**: `GET /api/get-appointment/:id`
- **Update Appointment**: `PUT /api/update-appointment/:id`
- **Delete Appointment**: `DELETE /api/delete-appointment/:id`

### Medical Records

- **Create Medical Record**: `POST /api/create-medical-record`
- **Get All Medical Records**: `GET /api/get-all-medical-records`
- **Get Medical Record by ID**: `GET /api/get-medical-record/:id`
- **Update Medical Record**: `PUT /api/update-medical-record/:id`
- **Delete Medical Record**: `DELETE /api/delete-medical-record/:id`

## Testing

Run unit tests using the following command:

```
npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - [@YourTwitter](https://twitter.com/YourTwitter) - Your Email

Project Link: [https://github.com/your-username/patient-management-service](https://github.com/your-username/patient-management-service)
