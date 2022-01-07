import { Router, Request, Response, NextFunction } from 'express'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('Not permitted today!')
}

const authPage = Router()

authPage.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
    <h1>Super Secret Stuff!</h1>
    <a href="/logout">Sign Out</a>
    `)
})

export { authPage }
