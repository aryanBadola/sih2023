import React from "react";
import "./SignUp.css";
import FormInput from "../FormInput";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    name:"",
    email:"",
    password:"",
    phonenumber:"",
    aadhaar:"",
    city:"",
    pincode:"",
    state:""
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
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
    {
      id: 3,
      name: "aadhaar",
      type: "text",
      placeholder: "Aadhar Number",
      label: "Aadhar Number",
    },
    {
      id: 4,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "email",

      required: true,
    },
    {
      id: 5,
      name: "phonenumber",
      type: "text",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 6,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
    },
    {
      id: 7,
      name: "pincode",
      type: "text",
      placeholder: "Pincode",
      label: "Pincode",
      required: true,
    },
    {
      id: 8,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "State",
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {values};

    console.log(data.values);

    const response = await axios.post('/api/client/clientRegister',data.values);

    console.log(response);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Client Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button >Submit</button>
      </form>
    </div>
  );
};

export default SignUp;