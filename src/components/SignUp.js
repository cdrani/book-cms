import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import { SIGNUP } from '../constants'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  return (
    <Mutation mutation={SIGNUP}>
      {(signUp, { data }) => (
        <form
          onSubmit={async e => {
            e.preventDefault()
            const {
              data: {
                signUp: { token }
              }
            } = await signUp({
              variables: { input: { email, username, password } }
            })
            localStorage.setItem('token', token)
            setUsername('')
            setEmail('')
            setPassword('')
          }}
        >
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="username"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </Mutation>
  )
}

export default SignUp
