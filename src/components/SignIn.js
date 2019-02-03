import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { compose, graphql } from 'react-apollo'

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
        variables: { loggedIn: true }
      })
      history.push('/books')
    }
  }

  const signInUser = useMutation(SIGNIN)

  return (
    <RegistrationForm
      onSubmit={async e => {
        e.preventDefault()
        const { login, password } = signInDetail
        const {
          data: {
            signIn: { token }
          }
        } = await signInUser({
          variables: { input: { login, password } }
        })
        openSesame(token)
        setSignInDetail({ login: '', password: '' })
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
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignIn)
