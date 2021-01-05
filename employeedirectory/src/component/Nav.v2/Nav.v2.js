import { Nav } from 'react-bootstrap'

function Header2() {
  return (

    <Nav>
  <Nav.Item>
    <Nav.Link href="/home">Sort by Name</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Sort by Location</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Sort by Team</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  </Nav.Item>
</Nav>
  );
}

export default Header2;
