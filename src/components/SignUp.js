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
  const [signUpDetail, setSignUpDetail] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = key => e => {
    const updatedValue = { [key]: e.target.value }
    setSignUpDetail(prevState => ({ ...prevState, ...updatedValue }))
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
      onCompleted={({ signUp: { token } }) => {
        openSesame(token)
        history.push('/books')
      }}
    >
      {(signUp, { data }) => (
        <RegistrationForm
          onSubmit={async e => {
            e.preventDefault()
            const { email, username, password } = signUpDetail
            await signUp({
              variables: { input: { email, username, password } }
            })

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
      )}
    </Mutation>
  )
}

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(SignUp)
