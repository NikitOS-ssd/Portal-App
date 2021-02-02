import React, { Component } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import './style.css'

class AuthModal extends Component {
  state = {
    email: '',
    password: '',
    show: false,
    handleShow: () => { this.setState({ show: true }) },
    handleClose: () => { this.setState({ show: false }) }
  }

  writeUserInfo(event, inputId) {
    switch (inputId.toLowerCase()) {
      case 'email':
        let email = event.target.value;
        this.setState({ email });
        break;
      case 'password':
        let password = event.target.value;
        this.setState({ password });
        break;
      default:
        console.log('Nothing out of this');
    }
  }

  // Login function
  async loginHandler() {
    const result = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOTXllEuwj_JEuTI2a2BtEGZb_q0PCXQc`, {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email, password: this.state.password, returnSecureToken: true })
    }).then(res => res.json())
      .then(res => res)
      .catch(err => { console.log(err) });
    
    if(result.error) {
      console.log(result)
    } else {
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result) );
      this.state.handleClose();
      window.location = window.location.href;
    }
  }

  // Registration function
  async registerHandler() {
    try {
      const result = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOTXllEuwj_JEuTI2a2BtEGZb_q0PCXQc', {
        method: 'POST',
        body: JSON.stringify({ email: this.state.email, password: this.state.password, returnSecureToken: true })
      }).then(res => res.json());

      if(result.error) {
        console.log(result)
      } else {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result) );
        this.state.handleClose();
        window.location = window.location.href;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let { show, handleShow, handleClose } = this.state

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Authentication
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please, go through authentication!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={event => this.writeUserInfo(event, 'email')}
                type="text"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2">
                  <img src="https://img.icons8.com/ios/50/000000/lock.png" alt="lock icon" style={{ width: '14px' }} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={event => this.writeUserInfo(event, 'password')}
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                required
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.loginHandler.bind(this)}>
              Log in
            </Button>
            <Button variant="primary" onClick={this.registerHandler.bind(this)}>
              Registration
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AuthModal