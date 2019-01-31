import React, { Component } from 'react'

import Modal from '../components/Modal'

export default class DashBoard extends Component {
  state = { modal: false }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = e => {
    this.setState({ modal: false })
  }

  render() {
    const { children } = this.props

    return (
      <>
        <button onClick={this.showModal}>ADD BOOK</button>
        <Modal show={this.state.modal} handleClose={this.hideModal}>
          {children}
        </Modal>
      </>
    )
  }
}
