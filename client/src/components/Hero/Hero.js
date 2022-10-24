import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import heroImg from '../../Assets/Images/Hero/two.png'

const Hero = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center px-5 py-3" md={12} lg={7}>
          <h1 className="mb-3 display-1">Scale your content with Trendit</h1>
          <h2 className="mb-4 display-5 text-muted">Trendit helps creators to grow <span className="text-primary text-capitalize">faster</span></h2>
          <Button size="lg" variant="dark" className="border border-white">Get Started</Button>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center" md={12} lg={5}>
          <Image fluid rounded src={heroImg} alt="Group of people forming a growing arrow"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;