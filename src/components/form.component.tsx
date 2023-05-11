import React, { useState } from 'react';

const FormComponent: React.FC = () => {

    const [enteredName, setEnteredName] = useState('');

    const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    }

    const formSubmission = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(enteredName);
    }

  return (
    <form onSubmit={formSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>First Name</label>
        <input type='text' id='name' onChange={nameInputHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
