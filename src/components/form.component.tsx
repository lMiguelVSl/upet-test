import { TextField, Button, Card, CardContent, Grid, Typography, InputAdornment } from "@mui/material"
import React, { useState } from 'react';
import { capitalize, formatPhoneNumber } from "../helpers/string-helper";

import flag from "../assets/Img/us_flag.jpg";
import { isValidEmail, isValidPassword, isValidPhoneNumber } from "../helpers/field-validators";


const FormComponent: React.FC = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [valName, setValName] = useState('');
  const [valLastName, setValLastName] = useState('');
  const [valPhone, setValPhone] = useState('');
  const [valEmail, setValEmail] = useState(false);
  const [valPassword, setValPassword] = useState('');

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nameVal: string = event.target.value;
    if (nameVal.length > 0) setEnteredName(capitalize(nameVal));
    else setEnteredName(nameVal);
    setValName('');
  }
  const lastNameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let lastNameVal: string = event.target.value;
    if (lastNameVal.length > 0) setEnteredLastName(capitalize(lastNameVal));
    else setEnteredLastName(lastNameVal);
    setValLastName('');
  }
  const phoneNumberInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 10) {
      let numberFormatted: string = formatPhoneNumber(event.target.value);
      setEnteredPhoneNumber('+1' + numberFormatted || '');
    } else {
      setEnteredPhoneNumber(event.target.value);
    }
    setValPhone('');
  }
  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEnteredEmail(newEmail);
    setValEmail(isValidEmail(newEmail));
  }
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
    setValPassword('');
  }
  const formSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValidation()) {
      console.log('GO AND SAVE IN THE DB')
      setEnteredName('');
      setEnteredLastName('');
      setEnteredPhoneNumber('');
      setEnteredEmail('');
      setEnteredPassword('');
    } else {
      console.log('bad form');
    }
  }

  const formValidation = (): Boolean => {
    if (!enteredName || !enteredName.length) {
      setValName("Name is required");
      return false;
    }
    if (!enteredLastName || !enteredLastName.length) {
      setValLastName("Last Name is required");
      return false;
    }
    if(!isValidPhoneNumber(enteredPhoneNumber)) {
      setValPhone("The number is not correct");
      return false;
    }
    if(!isValidPassword(enteredPassword)) {
      setValPassword('The password is not valid');
      return false;
    }
    return true;
  }

  const isFormValid =
    valName.length === 0
    && valLastName.length === 0
    && valPhone.length === 0
    && valEmail
    && valPassword.length === 0;

  return (
    <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
      <CardContent>
        <Typography gutterBottom variant="h4">uPet</Typography>
        <form onSubmit={formSubmission}>
          <Grid container spacing={1}>
            <Grid xs={6} item>
              <TextField
                id="outlined-basic"
                type="text"
                label="First name"
                size='small'
                variant="outlined"
                onChange={nameInputHandler}
                value={enteredName}
                error={valName && valName.length ? true : false}
                helperText={valName}
                fullWidth />
            </Grid>
            <Grid xs={6} item>
              <TextField
                id="outlined-basic"
                type="text"
                label="Last name"
                size='small'
                variant="outlined"
                onChange={lastNameInputHandler}
                value={enteredLastName}
                error={valLastName && valLastName.length ? true : false}
                helperText={valLastName}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-basic"
                type="tel"
                label="Phone number"
                size='small'
                InputProps={{
                  inputProps: { maxLength: 10, inputMode: 'tel' },
                  startAdornment:
                    <InputAdornment position="start">
                      <img src={flag} />
                    </InputAdornment>

                }}
                variant="outlined"
                onChange={phoneNumberInputHandler}
                value={enteredPhoneNumber}
                error={valPhone && valPhone.length ? true : false}
                helperText={valPhone}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                size='small'
                variant="outlined"
                onChange={emailInputHandler}
                value={enteredEmail}
                error={enteredEmail.length > 0 ? valEmail ? false : true : false}
                helperText={enteredEmail.length > 0 ? valEmail ? '' : 'Please enter a valid email address' : ''}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-basic"
                type="password"
                label="Password"
                size='small'
                variant="outlined"
                onChange={passwordInputHandler}
                value={enteredPassword}
                error={valPassword && valPassword.length ? true : false}
                helperText={valPassword}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <Button
                variant="contained"
                type="submit"
                disabled={!isFormValid}
                fullWidth>NEXT</Button>
            </Grid>
          </Grid>
        </form>

      </CardContent>
    </Card>
  );
};

export default FormComponent;
