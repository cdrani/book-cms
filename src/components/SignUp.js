import React, { useState } from 'react'
import { compose, graphql, Mutation } from 'react-apollo'

import {
  RegistrationForm,
  InputWrapper,
  Input,
  Label,
  LabelContainer,
  SmallButton,
  SIGNUP,
  UPDATELOGINSTATUS
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
      updateLoginStatus({
        variables: { loggedIn: true },
        update: (cache, _) => {
          cache.writeData({
            data: { auth: { __typename: 'Auth', loggedIn: true } }
          })
        }
      })
      history.push('/books')
    }
  }

  return (
    <Mutation
      mutation={SIGNUP}
      onCompleted={({ signIn: { token } }) => {
        openSesame(token)
        history.push('/books')
      }}
    >
      {(signUp, { data }) => (
        <RegistrationForm
          onSubmit={async e => {
            e.preventDefault()
            await signUp({
              variables: { input: { email, username, password } }
            })
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
            <LabelContainer>
              <SmallButton type="submit">SignUp</SmallButton>
            </LabelContainer>
          </InputWrapper>
        </RegistrationForm>
      )}
    </Mutation>
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignUp)
