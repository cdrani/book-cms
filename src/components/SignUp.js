import React, { useState } from 'react'
import { compose, graphql, Mutation } from 'react-apollo'

import { SIGNUP, UPDATELOGINSTATUS } from '../constants'
import {
  Form,
  InputWrapper,
  Input,
  Label,
  LabelContainer,
  SmallButton
} from '../constants'

const SignUp = ({ history, updateLoginStatus }) => {
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

  const openSesame = token => {
    if (token) {
      localStorage.setItem('token', token)
      updateLoginStatus({ variables: { loggedIn: true } })
      history.push('/books')
    }
  }

  return (
    <Mutation mutation={SIGNUP}>
      {(signUp, { data }) => (
        <Form
          onSubmit={async e => {
            e.preventDefault()
            const {
              data: {
                signUp: { token }
              }
            } = await signUp({
              variables: { input: { email, username, password } }
            })

            openSesame(token)
          }}
        >
          <InputWrapper>
            <LabelContainer>
              <Label>Username</Label>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </LabelContainer>
            <LabelContainer>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={handleEmailChange} />
            </LabelContainer>
            <LabelContainer>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </LabelContainer>
            <SmallButton type="submit">Sign Up</SmallButton>
          </InputWrapper>
        </Form>
      )}
    </Mutation>
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignUp)
