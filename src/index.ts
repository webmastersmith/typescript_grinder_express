import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import cookieSession from 'cookie-session'
import { homePage } from './routes/loginPage'
import { authPage } from './routes/authPage'

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['randomSession'] }))

// these must come after any middle wares
app.use(authPage)
app.use(homePage)
app.use(router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
