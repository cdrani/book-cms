import styled from 'styled-components'

const Button = styled.button`
  align-self: flex-end;
  width: 32%;
  height: 40px;
  font-size: 1.125em;
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`

const Input = styled.input`
  width: 90%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;
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

const LargeInputWrapper = styled(InputWrapper)`
  width: 70%;
`

const Label = styled.label`
  width: 50%;
`

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
`


const Select = styled.select`
  width: 95%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;
`

const SmallInputWrapper = styled(InputWrapper)`
  width: 35%;
`

export { Button, Form, Input, InputWrapper, Label, LabelContainer, LargeInputWrapper, Select, SmallInputWrapper }
