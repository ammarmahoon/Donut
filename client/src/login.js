import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Login (){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate()
    const onTextFieldChange = (e)=>{
    
        
        if(e.target.name=== 'mail'){
            setEmail(e.target.value)
        }else if(e.target.name=== 'pwd'){
            setPassword(e.target.value)
        }
    }
    const handleRegister = async (e)=>{

    

        if ( email && password ) {
            try {
                const response = await axios.post("http://localhost:4000/login",{
                    email : email,
                    password : password,
                });
                
                localStorage.setItem('login', 'success');
                localStorage.setItem('loggedInUser', JSON.stringify(response.data.userDetail));
                Navigate('/welcome')
            } catch (e) {
                console.log("I am getting error from server", e)              
            }
        }
        else{
            alert("Please completely filled all fields")
        }
        e.preventDefault();
      }
    return <div className="form">

    <form className="centre">
    <h1 className="heading">Login Form</h1><br/>
    <label className="heading">Email</label><br/>
        <input name="mail" type={"email"} placeholder="abcxxxx@gmail.com" onChange={onTextFieldChange} value={email}></input><br/>
        <label className="heading">Password</label><br/>
        <input name="pwd" type={"password"} placeholder="********" onChange={onTextFieldChange} value={password}></input><br/>
        <input className="heading" type={"button"} value={"Submit"} onClick={handleRegister}></input>
        <button>
        <Link className="heading" to={"/signup"}>Don't have account</Link>
        </button>
        </form>
        </div>
    }
