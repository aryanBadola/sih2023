import React from 'react'
import "../../User/Signup/SignUp.css"
import FormInput from '../../User/FormInput';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

  const [values, setValues] = useState({
      email: "",
      password: ""
  });
  
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {values};

    const response = await axios.post('/api/lawyer/lawyerLogin',data.values);

    console.log(response.data);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="app1">
      <form onSubmit={handleSubmit}>
        <h1>Lawyer Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage