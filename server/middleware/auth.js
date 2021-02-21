import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export default (req, res, next) => {

  if(req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(404).json({ message: 'Auth error'})
    }

    const decoded = jwt.verify(token, process.env._secretKey)
    req.user = decoded
    next()

  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
