import express from 'express'
import cors from 'cors'
import { apiRouter } from './routes/apiRoutes.js'

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use('/api', apiRouter)
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.get('/api/:category/:type', (req, res) => {
    console.log(req.params)
    res.json()
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})