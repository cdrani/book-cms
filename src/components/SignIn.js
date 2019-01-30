import React, { useState } from 'react'
import { compose, graphql, Mutation } from 'react-apollo'

import {
  Input,
  InputWrapper,
  LabelContainer,
  RegistrationForm,
  SmallButton,
  Label,
  UPDATELOGINSTATUS,
  SIGNIN
} from '../constants'

const SignIn = ({ history, updateLoginStatus }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
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
      mutation={SIGNIN}
      onCompleted={({ signIn: { token } }) => {
        openSesame(token)
        history.push('/books')
      }}
    >
      {(signIn, { data }) => (
        <RegistrationForm
          onSubmit={async e => {
            e.preventDefault()
            await signIn({
              variables: { input: { login: name, password } }
            })
          }}
        >
          <InputWrapper>
            <LabelContainer>
              <Label>Username</Label>
              <Input
                autoFocus
                type="text"
                value={name}
                onChange={handleNameChange}
              />
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
              <SmallButton type="submit">SignIn</SmallButton>
            </LabelContainer>
          </InputWrapper>
        </RegistrationForm>
      )}
    </Mutation>
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignIn)
