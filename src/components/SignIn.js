import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import {
  Form,
  Input,
  InputWrapper,
  LabelContainer,
  SmallButton,
  SmallLabel,
  SIGNIN
} from '../constants'

const SignIn = ({ history }) => {
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
      history.push('/books')
    }
  }

  return (
    <Mutation mutation={SIGNIN}>
      {(signIn, { data }) => (
        <Form
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
            openSesame(token)
          }}
        >
          <InputWrapper>
            <LabelContainer>
              <SmallLabel>username</SmallLabel>
              <Input
                autoFocus
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </LabelContainer>

            <LabelContainer>
              <SmallLabel>Password</SmallLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </LabelContainer>
            <SmallButton type="submit">Sign In</SmallButton>
          </InputWrapper>
        </Form>
      )}
    </Mutation>
  )
}

export default SignIn
