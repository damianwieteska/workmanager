import { generateAuthActions } from 'redux-token-auth'

const config = {
  authUrl: 'http://localhost:300/users',
  userAttributes: {
    firstName: 'first_name',
    imageUrl: 'image',
  },
  userRegistrationAttributes: {
    firstName: 'first_name',
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}