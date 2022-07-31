import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './addNew.css'

export  default function Signup (){

    const [firstName , setFirstName] = useState();
    const [surName , setSurName ] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] =useState();
    const [phoneno, setphone] =useState();
    const [Role, setRole] =useState();
    const Navigate = useNavigate();
    const onTextFieldChange = (e)=>{
        
        if(e.target.name=== 'fName'){
            setFirstName(e.target.value)
        }else if(e.target.name=== 'sName'){
            setSurName(e.target.value)
        }else if(e.target.name=== 'mail'){
            setEmail(e.target.value)
        }else if(e.target.name=== 'pwd'){
            setPassword(e.target.value)
        }else if(e.target.name=== 'number'){
            setphone(e.target.value)
        }else if(e.target.name=== 'role'){
            setRole(e.target.value)
        }

    }

    const handleRegister = async (e)=>{

        
        if (firstName && surName && email && password &&  phoneno && Role) {
            try {
                await axios.post("http://localhost:4000/register",{
                    name : firstName + ' ' + surName,
                    email : email,
                    password : password,
                    phoneNumber: phoneno,
                    role: Role,
                });
                Navigate('/login')
            } catch (e) {
                console.log("I am getting error from server", e)              
            }
        }
        else{
            alert("Please completely filled all fields")
        }

    }
    
        return <div className="form">
        <form className="centre">
        <h1 className="heading">Sign up Form</h1><br/>
        <label className="heading">Name</label><br/>
        <input name="fName" type={"text"} placeholder="First Name" onChange={onTextFieldChange} value={firstName}></input><br/>
        <label className="heading">SurName</label><br/>
        <input name="sName" type={"text"} placeholder="Second Name" onChange={onTextFieldChange} value={surName}></input><br/>
        <label className="heading">Email</label><br/>
        <input name="mail" type={"email"} placeholder="abcxxxx@gmail.com" onChange={onTextFieldChange} value={email}></input><br/>
        <label className="heading">Password</label><br/>
        <input name="pwd" type={"password"} placeholder="********" onChange={onTextFieldChange} value={password}></input><br/>
        <label className="heading">Phone Number</label><br/>
        <input type={"text"} name= "number" onChange={onTextFieldChange} value={phoneno} placeholder="03123456789"></input>
        <br/>
        <label className="heading">Select Role</label>
        <br/>
        <select name= "role" onChange={onTextFieldChange} value={Role}>
        <option className="heading">Choose</option>
        <option className="heading" value={"Admin"}>Admin</option>
        <option className="heading" value={"Super Admin"}>Super Admin</option>
        <option className="heading" value={"Contractor"}>Contractor</option>
        <option className="heading" value={"Employee"}>Employee</option>
        <option className="heading" value={"Manager"}>Manager</option>
        </select>
        <input className="heading" type={"button"} value={"Submit"} onClick={handleRegister} ></input><br/>
        <button >
        <Link className="button" to={"/login"} >Already have account</Link>
        </button>
        </form>
        </div>
    
}