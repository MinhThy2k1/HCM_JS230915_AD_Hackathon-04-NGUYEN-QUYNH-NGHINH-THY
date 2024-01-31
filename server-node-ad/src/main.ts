import express from 'express';
import cors from 'cors';
import RouterApi from './routes'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', RouterApi);
app.listen(4000, () => {
    console.log('Server on at: http://localhost:4000/api/v1')
})