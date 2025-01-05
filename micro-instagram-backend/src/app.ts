import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

export default app;
