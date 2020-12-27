import { Accordion, Card } from "react-bootstrap"
import "./Register.css"

function Register() {
    return (
        <div className="register">
			<Accordion className="register__mainCard">
				<Card className="register__firstCard">
					{/* Register Button Section */}
					<Accordion.Toggle as={Card.Header} eventKey="0" className="register__registerSection">
						<button>REGISTER NOW</button>
					</Accordion.Toggle>

					{/* Select the event section */}
					<Accordion.Collapse eventKey="0" className="register__cardBodySection">
						<Card.Body className="register__eventSection">
							<p>SELECT THE EVENT</p>
							<div className="register__eventButtons">
								<button>Hackathon</button>
								<button>Event Name</button>
								<button>Event Name</button>
								<button>Event Name</button>
								<button>Event Name</button>
								<button>Event Name</button>
							</div>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
    )
}

export default Register
