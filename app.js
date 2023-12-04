import express, { json } from "express"
import { home } from './routes/index.js'
import cors from 'cors'
import errorHandler from "./middleware/errorHandler.js"


const app = express()
app.use(json())
app.use(cors())

app.use('/', home)

app.use(errorHandler);

export default app