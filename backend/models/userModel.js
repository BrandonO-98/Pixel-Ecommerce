import mongoose from 'mongoose'
const {Schema, model} = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      // we don't multiple emails that are the same
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      // new users are not admin by default
      default: false,
    },
  },
  // created date and updated date
  {timestamps: true}
)

const User = model('User', userSchema)

export default User
