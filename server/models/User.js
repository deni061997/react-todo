import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  repeatPassword: String
})

const User = mongoose.model('User', userSchema)

export default User
