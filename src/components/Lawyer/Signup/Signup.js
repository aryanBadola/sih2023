import React from 'react'
import { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown';
import axios from "axios";
import "./signup.css"

function Signup() {
  const data = [
    {Expertise:'Criminal',id:1},
    {Expertise:'Divorce',id:2},
    {Expertise:'Corporate',id:3},
    {Expertise:'Civil',id:4}
  ]

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const description = [];
    description.push(d1);
    description.push(d2);
    
    const clickedOptions=[];
    for(var i=0;i<selectedOptions.length;i++){
      clickedOptions.push(selectedOptions[i].Expertise);
    }

    const data = {name,email,password,aibenumber,clickedOptions,city,description};


    console.log(data);
    // const response = await axios.post("/api/lawyer/lawyerRegister",
    // data);
    const res = await fetch("/api/lawyer/lawyerRegister",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(data)
    })

    const response = await res.json();
    console.log(response);
  }

  const handleChange = (e)=>{
    if(e.target.name=="name"){
      setName(e.target.value);
    }
    else if(e.target.name=="email"){
      setEmail(e.target.value);
    }
    else if(e.target.name=="password"){
      setPassword(e.target.value);
    }
    else if(e.target.name=="aibenumber"){
      setAibenumber(e.target.value);
    }
    else if(e.target.name=="city"){
      setCity(e.target.value);
    }
    else if(e.target.name=="d1"){
      setD1(e.target.value);
    }
    else if(e.target.name=="d2"){
      setD2(e.target.value);
    }
  }
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [aibenumber,setAibenumber] = useState("");
  const [expertise,setExpertise] = useState([]);
  const [city,setCity] = useState("");
  const [d1,setD1] = useState("");
  const [d2,setD2] = useState("");
  

  const [options,setOptions] = useState(data);
  const [selectedOptions,setSelectedOptions] = useState([]);

  return (
    <div className='app'> 
      <form method='POST'>
        <h1>Sign Up as Advocate</h1>
      <input  
        type='text'
        id='name'
        name='name'
        value={name}
        placeholder='Name'
        onChange={handleChange}
        className='formInput'
      />

      <input  
        type='text'
        id='email'
        name='email'
        value={email}
        placeholder='Email'
        onChange={handleChange}
        className='formInput'
      />

      <input  
        type='text'
        id='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={handleChange}
        className='formInput'
      />

      <input  
        type='text'
        id='aibenumber'
        name='aibenumber'
        placeholder='AIBE Number'
        value={aibenumber}
        onChange={handleChange}
        className='formInput'
      />

      {/* <h3>Multiselect Dropdown</h3> */}
      <Multiselect 
        options={options}
        onRemove={(event)=>{setSelectedOptions(event);console.log(selectedOptions);}} 
        onSelect={(event)=>{setSelectedOptions(event);console.log(selectedOptions);}}
        displayValue="Expertise"
        placeholder='Select Expertise'
      />

      <input  
        type='text'
        id='city'
        name='city'
        value={city}
        onChange={handleChange}
        className='formInput'
        placeholder='City'
      />

      <textarea
        type='text'
        id='d1'
        name='d1'
        value={d1}
        onChange={handleChange}
        className='formInput'
        rows={5} 
        cols={35}
        placeholder={"Add your description of case 1:"}
      />
      
      <textarea
        type='text'
        id='d2'
        name='d2'
        value={d2}
        className='formInput'
        onChange={handleChange}
        rows={5} 
        cols={35}
        placeholder={"Add your description of case 2:"}
      />
      <button onClick={handleSubmit} className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Signup