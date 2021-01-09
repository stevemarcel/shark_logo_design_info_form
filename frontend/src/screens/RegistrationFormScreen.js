import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { formSubmit } from '../actions/formActions'

const RegistrationFormScreen = () => {
  const [enterpriseName, setEnterpriseName] = useState('');
  const [logoSlogan, setLogoSlogan] = useState('');
  const [services, setServices] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [otherSocialMedia, setOtherSocialMedia] = useState('');
  const [colour, setColour] = useState('');
  const [logoType, setLogoType] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerWhatsappTel, setOwnerWhatsappTel] = useState('');
  const [ownerFbk, setOwnerFbk] = useState('');
  const [ownerIg, setOwnerIg] = useState('');
  const [ownerTwitter, setOwnerTwitter] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Row className='py-3 text-center'>
        <Col xs={12}>
          <h1>Logo Registration Form</h1>
        </Col>
        <Col xs={12}>
          Please fill appropriately and input <b>NONE</b> where answer is unavailable
        </Col>
      </Row>
      <FormContainer>
        <Card className='p-4 text-white' bg='primary'>
          <Row className='py-3 text-center'>
            <Col>
              <h4>Enterprise/Company Section</h4>
            </Col>
          </Row>
          <Form.Group onSubmit={submitHandler}>
            <Form.Group controlId='enterpriseName'>
              <Form.Label>Enterprise Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Shark Colours'
                value={enterpriseName}
                onChange={(e) => setEnterpriseName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='logoSlogan'>
              <Form.Label>Enterprise Slogan/Motto</Form.Label>
              <Form.Control
                type='text'
                placeholder='Company slogan/motto'
                value={logoSlogan}
                onChange={(e) => setLogoSlogan(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='services'>
              <Form.Label>Services Provided</Form.Label>
              <Form.Control
                type='text'
                placeholder='Shoe sales, accessories store, confectioneries sales, etc'
                value={services}
                onChange={(e) => setServices(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Enterprise Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='No street, city, town, state, country.'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Enterprise Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId='tel'>
                <Form.Label>Enterprise Phone Num(s)</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='+2349876543210, +2340123456789'
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='whatsapp'>
                <Form.Label>Enterprise Whatsapp Num(s)</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='+2349876543210, +2340123456789'
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Label>Enterprise Social Media Handles</Form.Label>

            <Form.Row>
              <Form.Group as={Col} controlId='instagram'>
                <Form.Control
                  type='text'
                  placeholder='Instagram handle'
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='facebook'>
                <Form.Control
                  type='text'
                  placeholder='Facebook handle/page'
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='twitter'>
                <Form.Control
                  type='text'
                  placeholder='Twitter handle'
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='otherSocialMedia'>
                <Form.Control
                  type='text'
                  placeholder='Any other social media'
                  value={otherSocialMedia}
                  onChange={(e) => setOtherSocialMedia(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='colour'>
                <Form.Label>Colour Choice For Logo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Red, Blue, Green, Lavender, etc'
                  value={colour}
                  onChange={(e) => setColour(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='logoType'>
                <Form.Label>Type of Logo</Form.Label>
                <Form.Control
                  as='select'
                  defaultValue='Not sure'
                  placeholder='Any other social media'
                  value={logoType}
                  onChange={(e) => setLogoType(e.target.value)}
                >
                  <option>Not sure</option>
                  <option>Flat (₦5000)</option>
                  <option>3D (₦5000)</option>
                  <option>Both (₦8000)</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Row className='py-3 text-center'>
              <Col>
                <h4>Enterprise Owner's Section</h4>
              </Col>
            </Row>

            <Form.Group controlId='ownerName'>
              <Form.Label>Enterprise Owner's full Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Steve Smith'
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Label>Enterprise Owner's Contacts</Form.Label>

            <Form.Row>
              <Form.Group as={Col} controlId='ownerWhatsappTel'>
                <Form.Control
                  type='tel'
                  placeholder='+2349876543210, +2340123456789'
                  value={ownerWhatsappTel}
                  onChange={(e) => setOwnerWhatsappTel(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='ownerIg'>
                <Form.Control
                  type='text'
                  placeholder='Instagram handle'
                  value={ownerIg}
                  onChange={(e) => setOwnerIg(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='ownerFbk'>
                <Form.Control
                  type='text'
                  placeholder='Facebook Contact'
                  value={ownerFbk}
                  onChange={(e) => setOwnerFbk(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='ownerTwitter'>
                <Form.Control
                  type='text'
                  placeholder='Twitter handle'
                  value={ownerTwitter}
                  onChange={(e) => setOwnerTwitter(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Button type='submit' variant='dark'>
              Submit
            </Button>
          </Form.Group>
        </Card>
      </FormContainer>
    </>
  );
};

export default RegistrationFormScreen;
