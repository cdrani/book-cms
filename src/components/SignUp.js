import React, { useState } from 'react'
import { compose, graphql } from 'react-apollo'
import { useMutation } from 'react-apollo-hooks'

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
  const [signUpDetail, setSignUpDetail] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setSignUpDetail(prevState => ({ ...prevState, ...updatedValue }))
  }

  const openSesame = (token, refreshToken) => {
    if (token && refreshToken) {
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      updateLoginStatus({
        variables: { loggedIn: true }
      })
      history.push('/books')
    }
  }

  const signUpUser = useMutation(SIGNUP)

  return (
    <RegistrationForm
      onSubmit={async e => {
        e.preventDefault()
        const { email, username, password } = signUpDetail

        const {
          data: {
            signUp: { token, refreshToken }
          }
        } = await signUpUser({
          variables: { input: { email, username, password } }
        })

        openSesame(token, refreshToken)

        setSignUpDetail({ email: '', username: '', password: '' })
      }}
    >
      <InputWrapper>
        <LabelContainer>
          <Label>Username</Label>
          <Input
            type="text"
            value={signUpDetail.username}
            onChange={handleChange('username')}
          />
        </LabelContainer>
        <LabelContainer>
          <Label>Email</Label>
          <Input
            type="email"
            value={signUpDetail.email}
            onChange={handleChange('email')}
          />
        </LabelContainer>
        <LabelContainer>
          <Label>Password</Label>
          <Input
            type="password"
            value={signUpDetail.password}
            onChange={handleChange('password')}
          />
        </LabelContainer>
        <LabelContainer>
          <SmallButton type="submit">SignUp</SmallButton>
        </LabelContainer>
      </InputWrapper>
    </RegistrationForm>
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignUp)
