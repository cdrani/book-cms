import styled from 'styled-components'

const Button = styled.button`
  align-self: flex-end;
  width: 32%;
  height: 40px;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 100%;
  padding: 25px;
  font-size: 1.5rem;
  color: #c4c4c4;
  opacity: 0.85;
  background-color: #fff;
`

const Label = styled.label`
  width: 50%;
`

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
`

const Input = styled.input`
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`
export { Button, Form, Input, InputWrapper, Label, LabelContainer }
