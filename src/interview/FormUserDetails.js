import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../App.css";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {

    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider >
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
            
          >
            <AppBar title="Enter User Details"  />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              style= {{
                width: "90%",
                left: "20px"
              }}

            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              style= {{
                width: "90%",
                left: "20px"
              }}
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
              style= {{
                width: "90%",
                left: "20px"
              }}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
              <a href="/"
              style = {{
                textAlign: "center",
                opacity: 0.1
              }}>exit</a>
          </Dialog>
        </>
      </MuiThemeProvider>

    );
  }
}

export default FormUserDetails;