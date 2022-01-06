import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'

const port = 3000
const app = express()

// app.use(express.urlencoded({extended: true}

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
