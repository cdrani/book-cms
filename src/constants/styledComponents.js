import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #0290ff;
  text-transform: none;
  @media only screen and (max-device-width: 480px) {
    font-size: 1rem;
  }
`

const AnchorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  align-self: flex-end;
  height: 40px;
  width: 10%;
  font-size: 1.25em;
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
  outline: none;

  @media only screen and (max-device-width: 480px) {
    font-size: 1rem;
  }
`

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 1px 0;
  margin-bottom: 30px;
  @media only screen and (max-device-width: 480px) {
  }
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const FullWidthForm = styled(Form)`
  width: 100%;
`

const H3 = styled.h3`
  letter-spacing: -0.2px;
  color: #888888;
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`

const Input = styled.input`
  width: 90%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    height: 30px;
    margin: 5px;
    padding: 5px;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 100%;
  padding: 25px;
  padding-top: 40px;
  font-size: 1.5rem;
  color: #c4c4c4;
  opacity: 0.85;
  background-color: #fff;

  @media only screen and (max-device-width: 480px) {
    margin: 5px;
    padding: 30px 10px;
    font-size: 1.125rem;
  }
`

const Label = styled.label`
  width: 50%;
`

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;

  @media only screen and (max-device-width: 480px) {
  }
`

const LargeButton = styled(Button)`
  width: 44%;
  font-size: 1.5rem;
`

const LargeInputWrapper = styled(InputWrapper)`
  width: 70%;
`

const LargeLabel = styled(Label)`
  width: 60%;
  opacity: 1;
  font-size: 1.25rem;
`

const Nav = styled.nav`
  background-color: #fff;
  width: 85.7%;
  height: 8.7%;
  margin: 23px auto 27px auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

const NumberInput = styled(Input)`
  text-align: center;
  width: 40%;
`

const Profile = styled.a`
  width: 50px;
`

const SmallButton = styled(Button)`
  width: 22%;
  height: unset;
  padding: 6px;
  @media only screen and (max-device-width: 480px) {
    font-size: 1.25rem;
    margin-top: 10px;
    margin-right: 5px;
  }
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
  @media only screen and (max-device-width: 480px) {
    font-size: 1.125rem;
    width: 35%;
  }
`

export {
  Anchor,
  AnchorWrapper,
  Button,
  Form,
  FullWidthForm,
  H3,
  HeaderWrapper,
  Img,
  Input,
  InputWrapper,
  Label,
  LargeButton,
  LabelContainer,
  LargeLabel,
  LargeInputWrapper,
  Nav,
  NumberInput,
  Profile,
  Select,
  SmallButton,
  SmallLabel,
  SmallInputWrapper
}
