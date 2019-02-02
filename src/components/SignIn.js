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
  const [signInDetail, setSignInDetail] = useState({ login: '', password: '' })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setSignInDetail(prevState => ({ ...prevState, ...updatedValue }))
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
            const { login, password } = signInDetail
            await signIn({
              variables: { input: { login, password } }
            })
          }}
        >
          <InputWrapper>
            <LabelContainer>
              <Label>Username</Label>
              <Input
                autoFocus
                type="text"
                value={signInDetail.login}
                onChange={handleChange('login')}
              />
            </LabelContainer>
            <LabelContainer>
              <Label>Password</Label>
              <Input
                type="password"
                value={signInDetail.password}
                onChange={handleChange('password')}
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
