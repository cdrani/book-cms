import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #0290ff;
  text-transform: none;

  @media only screen and (max-device-width: 480px) {
    font-size: 1.375rem;
    justify-self: flex-start;
  }
`

const AnchorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-device-width: 480px) {
    font-size: 1.125rem;
    justify-content: space-around;
    width: 100%;
  }
`

const Button = styled.button`
  align-self: flex-end;
  height: 50px;
  width: 120px;
  font-size: 1.25em;
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  background-color: #0290ff;
  outline: none;

  @media only screen and (max-device-width: 480px) {
    font-size: 1.125rem;
    width: 28%;
  }
`

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 1px 0;
  margin-bottom: 30px;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;

  @media only screen and (max-device-width: 480px) {
    width: 85%;
  }

  @media only screen and (max-device-width: 768px) {
    width: 60%;
  }
`

const RegistrationForm = styled(Form)`
  @media only screen and (min-width: 480px) {
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`

const FullWidthForm = styled(Form)`
  flex-direction: column;
  width: 100%;

  @media only screen and (min-device-width: 420px) {
    flex-direction: row;
  }

  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    width: 100%;
  }
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
  align-self: flex-end;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  outline: 0;
  font-size: 1.25rem;

  @media only screen and (max-device-width: 480px) {
    margin-top: 10px;
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
    padding: 30px 10px;
    font-size: 1.125rem;
  }

  @media only screen and (max-device-width: 768px) {
    padding-top: 20px;
  }
`

const Label = styled.label`
  width: 30%;
`

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`

const LargeButton = styled(Button)`
  width: 40%;
  font-size: 1.5rem;
`

const LargeInputWrapper = styled(InputWrapper)`
  width: 70%;
  padding: 10px;
  padding-top: 20px;
  font-size: 1.125rem;

  @media only screen and (max-device-width: 480px) {
    justify-content: row;
    width: 100%;
    padding: 10px;
  }
`

const LargeLabel = styled(Label)`
  width: 60%;
  opacity: 1;
  font-size: 1.125rem;
  @media only screen and (max-device-width: 480px) {
    width: 75%;
  }
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

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    justify-content: flex-start;
  }
`

const NumberInput = styled(Input)`
  justify-self: baseline;
  text-align: center;
  width: 30%;
  margin-top: 0;

  @media only screen and (max-device-width: 480px) {
    width: 25%;
    padding: 5px;
    margin-top: 0;
  }

  @media only screen and (min-device-width: 768px) {
    justify-self: flex-start;
    width: 100%;
    padding: 5px;
  }
`

const Profile = styled.a`
  width: 50px;
`

const SmallButton = styled(Button)`
  align-self: flex-end;
  width: 100px;
  height: 50px;
  padding: 6px;
  font-size: 1.25rem;

  @media only screen and (max-device-width: 480px) {
    margin-top: 10px;
    font-size: 1.125rem;
    width: 120px;
  }
`

const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;

  @media only screen and (max-device-width: 480px) {
    margin-top: 10px;
    margin-right: 4px;
    font-size: 1.25rem;
  }
`

const SmallInputWrapper = styled(InputWrapper)`
  width: 100%;
  padding: 25px;
  padding-top: 20px;
  margin: 0 auto;

  @media only screen and (max-device-width: 480px) {
    padding-top: 0;
    font-size: 1.125rem;
    padding-top: 20px;
  }

  @media only screen and (min-device-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  }
`

const SmallLabel = styled.label`
  align-self: baseline;
  font-size: 1.5rem;
`

const SmallLabelContainer = styled(LabelContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    font-size: 1.125rem;
  }

  @media only screen and (min-device-width: 768px) {
    flex-direction: column;
    width: 100%;
    font-size: 1.125rem;
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
  RegistrationForm,
  Select,
  SmallButton,
  SmallInputWrapper,
  SmallLabel,
  SmallLabelContainer
}
