import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import { SIGNUP } from '../constants'
import {
  Button,
  Form,
  InputWrapper,
  Input,
  Label,
  LabelContainer
} from '../constants'


const SignUp = () => {
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
            localStorage.setItem('token', token)
            setUsername('')
            setEmail('')
            setPassword('')
          }}
        >
          <InputWrapper>
            <LabelContainer>
              <Label>Username</Label>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="username"
              />
            </LabelContainer>
            <LabelContainer>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email"
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
            <Button type="submit">Sign Up</Button>
          </InputWrapper>
        </Form>
      )}
    </Mutation>
  )
}

export default SignUp
