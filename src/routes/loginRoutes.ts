//express router
import { Router, Request, Response } from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
  `)
})

router.get('/logout', (req, res) => {
  req.session = null
  res.redirect('/')
})

// fix typescript excepting all
type HttpBody = { [key: string]: string | undefined }
router.post('/login', (req: Request<{}, {}, HttpBody>, res: Response) => {
  //   console.log(req)

  const { email, password } = req.body
  console.log(typeof email)

  if (email && password && email === 'bob' && password === 'hello') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.status(422).send(`Email or password were not correct.`)
  }
})

export { router }
