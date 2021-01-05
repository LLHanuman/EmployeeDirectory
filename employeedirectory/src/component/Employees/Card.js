import { Card } from 'react-bootstrap'

function EmployeeCard() {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://static.demilked.com/wp-content/uploads/2019/04/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378__700.jpg" />
  <Card.Body>
    <Card.Title>Amanda Cline</Card.Title>
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
