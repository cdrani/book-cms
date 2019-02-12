import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { compose, withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import {
  Input,
  InputWrapper,
  LabelContainer,
  RegistrationForm,
  SmallButton,
  Label,
  SIGNIN
} from '../constants'

const SignIn = ({ client, history }) => {
  const [signInDetail, setSignInDetail] = useState({ login: '', password: '' })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setSignInDetail(prevState => ({ ...prevState, ...updatedValue }))
  }

  const openSesame = (token, refreshToken) => {
    if (token && refreshToken) {
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      client.cache.reset()
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
            signIn: { token, refreshToken }
          }
        } = await signInUser({
          variables: { input: { login, password } }
        })
        openSesame(token, refreshToken)
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
  withApollo,
  withRouter
)(SignIn)
