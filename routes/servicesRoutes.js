import express from 'express';
import { getServices, addService } from '../controllers/serviceController.js';

const router = express.Router();

router.get('/getService', getServices);
router.post('/addService', addService);

export default router;
