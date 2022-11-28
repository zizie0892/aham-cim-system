import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import CustomerRoute from './routes/CustomerRoute.js';

const app = express();
mongoose.connect('mongodb://0.0.0.0:27017/customer_cim_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(CustomerRoute);

app.listen(5000, ()=> console.log('Server running...'))

