import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Button1 } from "../components/Button" 
import Dog from '../images/dogs.jpg';
import "./customDatePickerWidth.css";

function Form () {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
    <div  className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="container border border-warning rounded ">

      <br/>

        <div className="container-sm">
          <div  className="container border">
            <br/>
            <div className="container-sm">
            <img alt="dog" src={Dog} className="img-fluid rounded-pill "/>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Book appointment</h2>
            <p className="text-center w-responsive mx-auto mb-5">Select a Date and Time that is most suitable for us to have a chat. I look forward to hearing from you and your pets!</p>
            </div>
              <p> From: </p>
                <div className="customDatePickerWidth">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            console.log(date);
                        }}
                        dateFormat="MM/dd/yyyy hh:mm a" 
                        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                        isClearable
                        scrollableMonthYearDropdown
                        showTimeSelect
                        timeIntervals={15}
                    />
                </div>
                <br/>
                <br/>
              <p> To: (optional)</p>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => {
                        setEndDate(date);
                        console.log(date);
                    }}
                    dateFormat="MM/dd/yyyy hh:mm a" 
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                    isClearable
                    scrollableMonthYearDropdown
                    showTimeSelect
                    timeIntervals={15}
                    className="wide"
                />
                <br/>
                <br/>
                <br/>

                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <label for="comments">Additional Comments</label>
                                <br/>
                                <br/>
                                <textarea type="text" id="comments" name="comments" rows="2" className="form-control md-textarea"></textarea>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="text-center text-md-left d-flex justify-content-center">
                        <Button1 className="btn" type="submit" to="/">Send</Button1>
                    </div>
                    <br/>
                    <br/>
                </form>


        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="row">
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
    </div>
    )
}

export default Form;