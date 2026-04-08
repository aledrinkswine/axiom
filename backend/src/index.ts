import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './db';

// variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// ruta base
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Entrenamiento Fitness' });
});

// ruta verificar supabase health
app.get('/health', async (req, res) => {
  try {
    // si hay error salta catch
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
