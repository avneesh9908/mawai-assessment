import express from 'express';
import dotenv from "dotenv";
// import { connectDB } from './config/db.config.js';
import serviceRoutes from './routes/servicesRoutes.js';
import cors from "cors";


dotenv.config();

const app = express();
app.use(express.json());
// connectDB();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Server is up and running');
}); 
app.use('/services', serviceRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
