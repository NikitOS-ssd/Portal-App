import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import {Tab, Container, Row, Col} from 'react-bootstrap'

class About extends Component {
	state = {}


	render() {
		return (
			<Container className="mt-1">
				<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column mt-2">
								<Nav.Item>
									<Nav.Link eventKey="first" > Design </Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="team" > Team  </Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="programming" > Programming </Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="framework" > Framework </Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="libraries" > Libraries </Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
							
						<Col sm={9 }>
							<Tab.Content className="mt-3">
								<Tab.Pane eventKey="first">
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum quidem placeat atque
										 quod quibusdam. Odio veniam fugit pariatur voluptatibus ipsa perferendis hic facere quod.</p>
								</Tab.Pane>

								<Tab.Pane eventKey="team">
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt totam iusto doloribus ipsa.</p>
								</Tab.Pane>
								<Tab.Pane eventKey="programming">
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus corrupti error ipsum
										 officia vel voluptatum debitis facilis molestiae?</p>
								</Tab.Pane>
								<Tab.Pane eventKey="framework">
									<img src="https://readhub.lk/wp-content/uploads/2020/05/1.jpg" width="500" alt=""/>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, magni.</p>
								</Tab.Pane>
								<Tab.Pane eventKey="libraries">
									<img src="https://hackernoon.com/hn-images/1*aalTd6nKuVR31c3-bEED8g.jpeg" width="500" alt=""/>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt totam iusto doloribus ipsa.</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		);
	}
}

export default About;