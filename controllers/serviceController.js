import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { serviceSchema } from '../validators/serviceValidator.js';

// Get the __dirname equivalent in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Now build the correct path to services.json
const filePath = path.join(__dirname, '../data/services.json');

// GET all services
export const getServices = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const services = JSON.parse(data);
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read services' });
  }
};

// POST add a new service
export const addService = async (req, res) => {
  try {
    const { error } = serviceSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const data = await fs.readFile(filePath, 'utf-8');
    const services = JSON.parse(data);

    const newService = {
      id: services.length + 1,
      ...req.body,
      createdAt: new Date().toISOString()
    };

    services.push(newService);
    await fs.writeFile(filePath, JSON.stringify(services, null, 2));

    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add service' });
  }
};
