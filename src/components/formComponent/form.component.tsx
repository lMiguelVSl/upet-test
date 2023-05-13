import { TextField, Button, Card, CardContent, Grid, Typography, InputAdornment } from "@mui/material"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../index.css';

import { isValidEmail, isValidLastName, isValidName, isValidPassword } from "../../helpers/field-validators";
import { capitalize, formatPhoneNumber, _capitalize } from "../../helpers/string-helper";
import { postUser } from "../../services/formService";
import flag from "../../assets/Img/us_flag.jpg";
import { User } from "../../models/user";


const FormComponent: React.FC = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const [valName, setValName] = useState(false);
  const [valLastName, setValLastName] = useState(false);
  const [valEmail, setValEmail] = useState(false);
  const [valPassword, setValPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const navigate = useNavigate();

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nameVal: string = event.target.value;
    if (nameVal.length > 0) nameVal = capitalize(nameVal);
    setEnteredName(nameVal);
    setValName(isValidName(nameVal));
  }
  const lastNameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let lastNameVal: string = event.target.value;
    if (lastNameVal.length > 0) lastNameVal = capitalize(lastNameVal);
    setEnteredLastName(lastNameVal);
    setValLastName(isValidLastName(lastNameVal));
  }
  const phoneNumberInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 10) {
      let numberFormatted: string = formatPhoneNumber(event.target.value);
      setEnteredPhoneNumber(numberFormatted || '');
    } else {
      setEnteredPhoneNumber(event.target.value);
    }
  }
  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail = event.target.value;
    if (newEmail.length > 0) newEmail = _capitalize(newEmail);
    setEnteredEmail(newEmail);
    setValEmail(isValidEmail(newEmail));
  }
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newPassword = event.target.value;
    setEnteredPassword(newPassword);
    setValPassword(isValidPassword(newPassword));
  }
  const formSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    let user: User = {
      name: enteredName,
      lastName: enteredLastName,
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
      password: enteredPassword
    }

    setEnteredName('');
    setEnteredLastName('');
    setEnteredPhoneNumber('');
    setEnteredEmail('');
    setEnteredPassword('');

    postUser(user)
      .then(res => res.json())
      .then(resData => {
        navigate(`/userApplication/${resData.userResult.id}`);
      })
      .catch(() => {
        setIsClicked(false);
      });
  }

  useEffect(() => {
    let isFormValid: boolean = valName && valLastName && valEmail && valPassword;
    setValidForm(isFormValid);
  }, [enteredName, enteredLastName, enteredPhoneNumber, enteredEmail, enteredPassword]);


  return (
    <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
      <CardContent>
        <Typography gutterBottom variant="h4">uPet</Typography>
        <form onSubmit={formSubmission}>
          <Grid container spacing={1}>
            <Grid xs={6} item>
              <TextField
                id="first-name-id"
                type="text"
                label="First name"
                size='small'
                variant="outlined"
                onChange={nameInputHandler}
                value={enteredName}
                error={enteredName.length > 0 ? valName ? false : true : false}
                helperText={enteredName.length > 0 ? valName ? '' : "Name is required" : ''}
                fullWidth />
            </Grid>
            <Grid xs={6} item>
              <TextField
                id="last-name-id"
                type="text"
                label="Last name"
                size='small'
                variant="outlined"
                onChange={lastNameInputHandler}
                value={enteredLastName}
                error={enteredLastName.length > 0 ? valLastName ? false : true : false}
                helperText={enteredLastName.length > 0 ? valLastName ? '' : "Last Name is required" : ''}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="phone-number-id"
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
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="email-id"
                type="email"
                label="Email"
                size='small'
                variant="outlined"
                onChange={emailInputHandler}
                value={enteredEmail}
                error={enteredEmail.length > 0 ? valEmail ? false : true : false}
                helperText={enteredEmail.length > 0 ? valEmail ? '' : 'Invalid email address' : ''}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="password-id"
                type="password"
                label="Password"
                size='small'
                variant="outlined"
                onChange={passwordInputHandler}
                value={enteredPassword}
                error={enteredPassword.length > 0 ? valPassword ? false : true : false}
                helperText={enteredPassword.length > 0 ? valPassword ? '' : "Oops! You need a password longer than 8 characters with numbers and letters." : ''}
                fullWidth />
            </Grid>
            <Grid xs={12} item>
              <Button
                variant="contained"
                type="submit"
                disabled={!validForm}
                fullWidth>
                {isClicked ? <div className="loader"></div> : <div>NEXT</div>}
              </Button>
            </Grid>
          </Grid>
        </form>

      </CardContent>
    </Card>
  );
};

export default FormComponent;
