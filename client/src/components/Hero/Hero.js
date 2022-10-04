import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import heroImg from '../../Assets/Images/Hero/hero.jpeg'

const Hero = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <h1>Scale your content with Trendit</h1>
          <h2>Trendit helps creators to grow faster</h2>
          <Button size="lg" variant="dark">Get Started</Button>
        </Col>
        <Col>
          <Image fluid rounded src={heroImg} alt="Group of people forming a growing arrow"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;