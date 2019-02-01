import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from '../components/Modal'


const Link = styled.a`
  padding: 1% 2%;
  cursor: pointer
  text-decoration: none;
  color: #4386bf;
`

export default class DashBoard extends Component {
  state = { modal: false }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = e => {
    this.setState({ modal: false })
  }

  render() {
    const { buttonText, children } = this.props

    return (
      <>
        <Link onClick={this.showModal}>{buttonText}</Link>
        <Modal show={this.state.modal} handleClose={this.hideModal}>
          {children}
        </Modal>
      </>
    )
  }
}
