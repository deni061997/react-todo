import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import validator from 'express-validator'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export const signUp = async (req, res) => {
  const { email, password, repeatPassword, ...userData } = req.body
  
  try {
  
    const errors = validator.validationResult(req)

    if (password !== repeatPassword) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Incorrect request' })
    }
    
    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 8)

    const newUser = new User({ email, password: hashedPassword, ...userData })

    await newUser.save()

    res.status(200).json(newUser)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const signIn = async (req, res) => {
  
  const { email, password } = req.body
  
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isPassValid = await bcrypt.compare(password, user.password)

    if (!isPassValid) {
      return res.status(404).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user._id }, process.env._secretKey, { expiresIn: '1h'} )

    res.status(200).json({
      token,
      user
    })

  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const auth = async (req, res) => {

  try {
    
    const user = await User.findOne({ _id: req.user.id })

    const token = jwt.sign({ id: user._id }, process.env._secretKey, { expiresIn: '1h'} )

    res.status(200).json({
      token,
      user
    })

  } catch (error) {
    res.status(404).json({ message: error })
  }
}
