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

const LargeButton = styled(Button)`
  width: 44%;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`

const FullWidthForm = styled(Form)`
  width: 100%;
`

const H3 = styled.h3`
  letter-spacing: -0.2px;
  color: #888888;
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

const LargeLabel = styled(Label)`
  width: 60%;
  opacity: 1;
  font-size: 1.25rem;
`

const NumberInput = styled(Input)`
  text-align: center;
  width: 40%;
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

const SmallLabel = styled.label`
  width: 30%;
`

export {
  Button,
  Form,
  FullWidthForm,
  H3,
  Input,
  InputWrapper,
  Label,
  LargeButton,
  LabelContainer,
  LargeLabel,
  LargeInputWrapper,
  NumberInput,
  Select,
  SmallLabel,
  SmallInputWrapper
}
