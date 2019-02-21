import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from '../components/Modal'

const Link = styled.a`
  display: flex;
  postion: relative;
  top: 0;
  left: 100%;
  padding: 1% 2%;
  cursor: pointer
  text-decoration: none;
  color: #4386bf;
`

const LinkButton = styled.button`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  left: 100%;
  width: 40px;
  height: 40px;
  z-index: 1;
  padding: 0 20px;
  transform: translate(-50%, 50%);
  border: none;
  color: white;
  font-size: 1.25rem;
  background-color: pink;
  border-radius: 50%;
`

export default class DashBoard extends Component {
  state = { modal: false }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = e => {
    this.setState({ modal: false })
  }

  conditionalButton = () => {
    const { buttonText } = this.props
    return buttonText === '+' ? (
      <LinkButton onClick={this.showModal}>
        <span>{this.props.buttonText}</span>
      </LinkButton>
    ) : (
      <Link
        onClick={this.showModal}
        style={{
          width: `${this.props.buttonText === 'ADD BOOK' ? '140px' : '100px'}`
        }}
      >
        {this.props.buttonText}
      </Link>
    )
  }

  render() {
    return (
      <>
        {this.conditionalButton()}
        <Modal show={this.state.modal} handleClose={this.hideModal}>
          {this.props.children}
        </Modal>
      </>
    )
  }
}
