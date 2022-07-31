import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onTextFieldChange = (e) => {
    console.log(e.target.name);

    if (e.target.name === 'mail') {
      setEmail(e.target.value);
    } else if (e.target.name === 'pwd') {
      setPassword(e.target.value);
    }
  };
  const handleRegister = async (e) => {
    console.log(email);
    console.log(password);

    if (email && password) {
      console.log('running');
      try {
        const response = await axios.post('http://localhost:4000/login', {
          email: email,
          password: password,
        });
        console.log('I am getting response from server', response);
      } catch (e) {
        console.log('I am getting error from server', e);
      }
    } else {
      alert('Please completely filled all fields');
    }
  };

  return (
    <div>
      <form>
        <h1>Login Form</h1>
        <br />
        <label>Email</label>
        <br />
        <input
          name="mail"
          type={'email'}
          placeholder="abcxxxx@gmail.com"
          onChange={onTextFieldChange}
          value={email}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          name="pwd"
          type={'password'}
          placeholder="********"
          onChange={onTextFieldChange}
          value={password}
        />
        <br />
      </form>
      <button>
        <Link to={'/welcome'} onClick={handleRegister}>
          Submit
        </Link>
      </button>
    </div>
  );
}
// <input type={"button"} value={"Submit"} onClick={handleRegister}></input>
