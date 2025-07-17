📦 Service API (Express + JSON File Storage)
This is a simple Express-based backend API project that supports getting and adding service records (like Haircut, Massage, etc.) using a local JSON file for storage.

🚀 How to Run the Project
1. Clone or download the repo

git clone https://github.com/avneesh9908/mawai-assessment.git
cd backend

2. Install dependencies
npm install

3. Run the server
Using nodemon (recommended for development):


npx nodemon index.js
Or using plain Node.js:


node index.js
Server will start at:


http://localhost:3000
🌐 API Endpoints
✅ GET /services/getService
Returns the list of all available services.

Example Request:


GET http://localhost:3000/services/getService
Example Response:


[
  {
    "id": 1,
    "name": "Haircut",
    "provider": "Salon",
    "price": 300,
    "createdAt": "2024-07-01T10:00:00.000Z"
  }
]



➕ POST /services/addService
Adds a new service entry to the list.

Required fields in request body (JSON):

name: string, min 2 chars

provider: string, min 2 chars

price: positive number

Example Request:

POST http://localhost:8080/services/addService
Body (JSON):

{
  "name": "Threading",
  "provider": "Glow Studio",
  "price": 150
}
The server will automatically add id and createdAt fields.

Example Response:


{
  "id": 4,
  "name": "Threading",
  "provider": "Glow Studio",
  "price": 150,
  "createdAt": "2025-07-17T10:15:00.000Z"
}



🗂 Project Structure
pgsql
Copy
Edit
backend/
├── controllers/
│   └── serviceController.js
├── routes/
│   └── servicesRoutes.js
├── validators/
│   └── serviceValidator.js
├── data/
│   └── services.json         <-- stores the service data
├── index.js
├── package.json
└── .env



📝 Notes
Make sure the data/services.json file exists and contains at least 3 default objects when you start the server.

The server appends new data to this file using fs.promises.writeFile.

