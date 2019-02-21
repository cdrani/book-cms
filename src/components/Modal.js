import React from 'react'
import styled from 'styled-components'

const Modal = ({ bookId, handleClose, show, children }) => {
  const ModalContainer = styled.div`
    display: ${show ? 'block' : 'none'};
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.9);
  `

  const SectionContainer = styled.section`
    position: fixed;
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    @media only screen and (min-device-width: 768px) {
      width: 380px;
    }
  `

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
  `

  const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  `

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { handleClose })
  )

  return (
    <ModalContainer>
      <ButtonContainer>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </ButtonContainer>
      <SectionContainer>{childrenWithProps}</SectionContainer>
    </ModalContainer>
  )
}

export default Modal
