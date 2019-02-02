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
  display: flex;
  position: absolute;
  top: 0;
  left: 100%;
  width: 30px;
  height: 30px;
  //transform: transition(-10%, -50%);
  background-color: pink;
  border-radius: 50%;
`

const Plus = styled.span`
  // position: absolute;
  // top: 1%;
  // left: 3%;
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
    const { ButtonComponent } = this.props.children.props
    return ButtonComponent ? (
      <ButtonComponent onClick={this.showModal}>
        <Plus>{this.props.buttonText}</Plus>
      </ButtonComponent>
    ) : (
      <Link onClick={this.showModal}>{this.props.buttonText}</Link>
    )
  }

  render() {
    console.log(this.props.children.props)
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
