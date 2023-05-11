import { TextField, Button, Card, CardContent, Grid } from "@mui/material"

import React, { useState } from 'react';


const FormComponent: React.FC = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredName(event.target.value);
  const lastNameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredLastName(event.target.value);
  const phoneNumberInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredPhoneNumber(event.target.value);
  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredEmail(event.target.value);
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredPassword(event.target.value);

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
      prompt('bad form');
    }
  }

  const formValidation = (): Boolean => {
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredPhoneNumber);
    console.log(enteredEmail);
    console.log(enteredPassword);
    return true;
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={formSubmission}>
        <Grid container spacing={1}>
          <Grid xs={6} item>
            <TextField id="outlined-basic" label="First name" size='small' variant="outlined" onChange={nameInputHandler} fullWidth />
          </Grid>
          <Grid xs={6} item>
            <TextField id="outlined-basic" label="Last name" size='small' variant="outlined" onChange={lastNameInputHandler} fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField id="outlined-basic" type="text" label="Phone number" size='small' variant="outlined" onChange={phoneNumberInputHandler} fullWidth/>
          </Grid>
          <Grid xs={12} item>
            <TextField id="outlined-basic" type="email" label="Email" size='small' variant="outlined" onChange={emailInputHandler} fullWidth/>
          </Grid>
          <Grid xs={12} item>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>

      </CardContent>
    </Card>
    // <form onSubmit={formSubmission}>

    //   <Grid container spacing={2}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={5}>
    //       <TextField id="outlined-basic" label="First name" size='small' variant="filled" onChange={nameInputHandler} />
    //     </Grid>
    //     <Grid item xs={5}>
    //       <TextField id="outlined-basic" label="Last name" size='small' variant="filled" onChange={lastNameInputHandler} />
    //     </Grid>
    //   </Grid>

    //   <Grid container spacing={2}>
    //     <Grid item xs={10}>
    //       <TextField id="outlined-basic" label="Phone number" size='small' variant="filled" onChange={phoneNumberInputHandler} />
    //     </Grid>
    //     <Grid item xs={10}>
    //       <TextField id="outlined-basic" label="Email" size='small' variant="filled" onChange={emailInputHandler} />
    //     </Grid>
    //     <Grid item xs={10}>
    //       <TextField id="outlined-basic" label="Password" size='small' variant="filled" onChange={passwordInputHandler} />
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={2}>
    //     <Button type="submit" variant="contained" className="button-form">
    //       Save
    //     </Button>
    //   </Grid>
    //   </Grid>

    // </form>
  );
};

export default FormComponent;
