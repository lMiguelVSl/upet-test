import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const FormComponent: React.FC = () => {

  const [enteredName,        setEnteredName]        = useState('');
  const [enteredLastName,    setEnteredLastName]    = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [enteredEmail,       setEnteredEmail]       = useState('');
  const [enteredPassword,    setEnteredPassword]    = useState('');

  const nameInputHandler        = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredName(event.target.value);
  const lastNameInputHandler    = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredLastName(event.target.value);
  const phoneNumberInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredPhoneNumber(event.target.value);
  const emailInputHandler       = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredEmail(event.target.value);
  const passwordInputHandler    = (event: React.ChangeEvent<HTMLInputElement>) => setEnteredPassword(event.target.value);

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

  const formValidation = () : Boolean => {
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredPhoneNumber);
    console.log(enteredEmail);
    console.log(enteredPassword);
    return true;
  }

  return (
    <form onSubmit={formSubmission}>
      <div className='form-control'>
        <TextField id="outlined-basic" label="First name" variant="filled"   onChange={nameInputHandler} />
        <TextField id="outlined-basic" label="Last name" variant="filled"    onChange={lastNameInputHandler} />
        <TextField id="outlined-basic" label="Phone number" variant="filled" onChange={phoneNumberInputHandler} />
        <TextField id="outlined-basic" label="Email" variant="filled"        onChange={emailInputHandler} />
        <TextField id="outlined-basic" label="Password" variant="filled"     onChange={passwordInputHandler} />
      </div>
      <div className="form-actions">
        <Button type="submit" variant="contained" className="button-form">
          Save
        </Button>
      </div>
    </form>
  );
};

export default FormComponent;
