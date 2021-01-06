import { Card } from 'react-bootstrap'
import User from './Users'

function EmployeeCard() {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=""/>
  <Card.Body>
    <Card.Title>
    <User />
    </Card.Title>
    <Card.Text>
        <ul>
        Phone Number: 555-555-5555
        </ul>
        <ul>
        Manager: Megan
        </ul>
        <ul>
        Location: Minneapolis
        </ul>
        <ul>
        Title: Engineer
        </ul>
    </Card.Text>
  </Card.Body>
</Card>
  );
}

export default EmployeeCard;
