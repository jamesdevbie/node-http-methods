import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './Routers/productRouter.js'

// dotenv config
dotenv.config()

// express server
const app = express()

// cors middleware config

app.use(cors())

//default middleware to read "req.body"

app.use(express.json())

// Default Route

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my API')
})

// Custom Route
app.use('/api/product', router)

//Port Initialization
const port = process.env.PORT || 500

// start server

app.listen(port, () => console.log('Server Started Successfully'))
