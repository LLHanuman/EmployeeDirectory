import { Nav } from 'react-bootstrap'

function Header() {
  return (

    <Nav>
  <Nav.Item>
    <Nav.Link href="/home">Member Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Engineers</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Managment</Nav.Link>
  </Nav.Item>
</Nav>
  );
}

export default Header;



