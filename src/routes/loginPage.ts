import { Router, Request, Response } from 'express'

const homePage = Router()

homePage.get('/', (req: Request, res: Response) => {
  console.log(req.session)

  if (req.session && req.session.loggedIn) {
    res.send(`
      <h1>Thanks for signing in!</h1>
      <a href="/logout">Sign Out</a>
      `)
  } else {
    res.send(`
        <h1>Ready to sign in?</h1>
        <a href="/login">Sign In</a>          
      `)
  }
})

export { homePage }
