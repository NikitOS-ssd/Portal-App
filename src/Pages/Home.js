import React, { Component } from 'react'
import { Button, Card, CardDeck, Container, Jumbotron } from 'react-bootstrap'

class Home extends Component {
	render() {
		return (
			<>
				<Jumbotron style={{paddingLeft: '12%'}}>
					<h1>Welcome to our site!</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
						Deleniti facere est commodi pariatur aut iste sapiente tempore numquam?
  				</p>
					<p>
						<Button variant="primary">Learn more</Button>
					</p>
				</Jumbotron>

				<Container className="mt-4" style={{marginBottom: '10%'}}>
					<h2 style={{ textAlign: 'center' }}>Our team</h2>

					<CardDeck className="">
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" style={{ height: '180px' }} src="https://www.wrike.com/blog/content/uploads/2016/11/Managing-Development-Teams-820x480.jpg" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
    						</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>

						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
    						</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
							<Card.Img variant="top" style={{ height: '180px' }} src="https://bit.ua/wp-content/uploads/2015/01/OH8A8524.jpg" />
						</Card>

						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" style={{ height: '180px' }} src="https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
    						</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
			</>
		);
	}
}

export default Home;