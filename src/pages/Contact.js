import React from "react";
import styled from 'styled-components/macro';
import { Button1 } from "../components/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dog from '../images/dogs5.jpg';


const Section = styled.div`
  padding: 20px;
`;

const Contact = () => {

  return (

 <Section class="mb-4">
  <br/>
  <br/>
  <br/>

  <div className="container border border-warning rounded ">

  <br/>

  <div className="container-sm">
    <img alt="doggo" src={Dog} className="img-fluid rounded-pill "/>



  <h2 class="h1-responsive font-weight-bold text-center my-4">Free Consultation</h2>

  <p class="text-center w-responsive mx-auto mb-5">Please provide your name, emal, type of pet and any additional information regarding your walk.</p>
  </div>
  <div className="row">


      <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">


              <div className="row">


                  <div className="col-md-6">
                      <div className="md-form mb-0">
                          <label for="name" className="">Your name</label>
                          <input type="text" id="name" name="name" className="form-control" />
                      </div>
                  </div>



                  <div className="col-md-6">
                      <div className="md-form mb-0">
                          <label for="email" className="">Your email</label>
                          <input type="text" id="email" name="email" className="form-control" />
                      </div>
                  </div>


              </div>



              <div className="row">
                  <div className="col-md-12">
                      <div className="md-form mb-0">
                          <label for="Type of Pet" className="">Type of Pet</label>
                          <input type="text" id="Type of Pet" name="Type of Pet" className="form-control" />

                      </div>
                  </div>
              </div>



              <div className="row">


                  <div className="col-md-12">

                      <div className="md-form">
                          <label for="comments">Additional Comments</label>
                          <textarea type="text" id="comments" name="comments" rows="2" className="form-control md-textarea"></textarea>
                      </div>
                      <br/>
                  </div>
              </div>


          </form>

          <div className="text-center text-md-left d-flex justify-content-center">
              <Button1 className="btn" type="submit" to="/">Send</Button1>
          </div>
          <div className="status"></div>
      </div>

      <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Bel Alton, MD 20611, USA</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+518-545-8241</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>Lynn@Melius.com</p>
              </li>
          </ul>
      </div>


  </div>
  <br/>
  </div>
  <br/>
  <br/>
  <br/>
</Section>

  );
};

export default Contact;