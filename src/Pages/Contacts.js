import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

class Contacts extends Component {
	state = {
		email: '',
		password: '',
		passwordType: 'password'
	}

	
	writeEmailFunc(event) {
		let email = event.target.value;

		this.setState({email});
	}
	writePassFunc(event) {
		let password = event.target.value;

		this.setState({password});
	}

	showPassFunc(event) {
		let elem = event.target;

		elem.checked ? this.setState({passwordType: 'text'}) : this.setState({passwordType: 'password'});
	}

	submitFormFunc() {
		let {email = undefined, password = undefined} = this.state;

		let obj = {email: email, password: password};
		console.log(obj);
	}

	render() {
		let {email, password, passwordType} = this.state;

		return (
			<Form style={{width: "50%", margin: "3% auto"}}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" onChange={this.writeEmailFunc.bind(this)} value={email} placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
   			 	</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type={passwordType} onChange={this.writePassFunc.bind(this)} value={password} placeholder="Password" />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox" value={password} onChange={this.showPassFunc.bind(this)}>
					<Form.Check type="checkbox" label="show password" />
				</Form.Group>

				<Button variant="primary" type="button" onClick={this.submitFormFunc.bind(this)}>
					Submit
  			</Button>
			</Form>
		);
	}
}

export default Contacts;