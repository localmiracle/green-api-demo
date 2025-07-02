// src/app.ts
import express from 'express';
import cors from 'cors';
import { greenApiRouter } from './routes/greenApiRoutes';

const app = express();
app.use(cors(), express.json());
app.use('/api', greenApiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
