import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createTheme({
    palette: {
      type: "light"
    },

  });

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (

      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Does your pet require medical administration?"
              label="Medical Administration"
              onChange={handleChange('medicalAdministration')}
              defaultValue={values.medicalAdministration}
              margin="normal"
              fullWidth
              background-color="primary"
              style= {{
                width: "90%",
                left: "20px"
              }}
            />
            <br />
            <TextField
              placeholder="Does your pet require pet sitting?"
              label="Pet Sitting"
              onChange={handleChange('petSitting')}
              defaultValue={values.petSitting}
              margin="normal"
              fullWidth
              style= {{
                width: "90%",
                left: "20px"
              }}
            />
            <br />
            <TextField
              placeholder="Does your pet require walking?"
              label="Walking"
              onChange={handleChange('walking')}
              defaultValue={values.walking}
              margin="normal"
              fullWidth
              style= {{
                width: "90%",
                left: "20px"
              }}
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default FormPersonalDetails;