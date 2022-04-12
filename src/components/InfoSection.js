import React from 'react';
import styled from 'styled-components';
import { Button1 } from './Button';
import { Form } from 'react-bootstrap';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  delay
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay={delay}
          data-aos-anchor-placement='center bottom'
        >

          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button1 to='/form' primary='true'>
            {buttonLabel}
          </Button1>

        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt='home'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-once='true'
            data-aos-delay={delay}
            data-aos-anchor-placement='center bottom'
          />
          
        </ColumnRight>
      </Container>
      <div className='container-sm border border-warning rounded'>

        <Form>
            <br/>
            <h2 class="h1-responsive font-weight-bold text-center my-4">Free Consultation</h2>

            <p class="text-center w-responsive mx-auto mb-5">Please provide your name, emal, type of pet and any additional information regarding your walk.</p>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="float-start" >Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="float-start">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="float-start">Type of Pet</Form.Label>
              <Form.Control type="text" placeholder="Enter Type of Pet" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="float-start">Message</Form.Label>
              <Form.Control as="textarea" placeholder="Enter Message" />
            </Form.Group>
            <br/>
            <Button1 to="/" className="float-end" variant="primary float-end" type="submit">
              Submit
            </Button1>

            <br/>
            <br/>
            <br/>
          </Form>

        </div>
    </Section>
  );
};

export default InfoSection;
