import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LOGIN = gql`
  mutation SignIn($input: signInInput!) {
    signIn(input: $input) {
      token
    }
  }
`

export default function SignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  return (
    <Mutation mutation={LOGIN}>
      {(signIn, { data }) => (
        <form
          onSubmit={async e => {
            e.preventDefault()
            const {
              data: {
                signIn: { token }
              }
            } = await signIn({
              variables: { input: { login: name, password } }
            })
            localStorage.setItem('token', token)
          }}
        >
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="username/email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Sign In</button>
        </form>
      )}
    </Mutation>
  )
}
