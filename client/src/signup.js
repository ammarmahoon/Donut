import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export  default function Signup (){

    const [firstName , setFirstName] = useState();
    const [surName , setSurName ] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] =useState();
    const [phoneno, setphone] =useState();
    const [Role, setRole] =useState();
    const Navigate = useNavigate();
    const onTextFieldChange = (e)=>{
        console.log(e.target.name)
        
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

        console.log(firstName)
        console.log(surName)
        console.log(email)
        console.log(password)
        console.log(phoneno);
        console.log(Role)

        if (firstName && surName && email && password &&  phoneno && Role) {
            console.log("running");
            try {
                const response = await axios.post("http://localhost:4000/register",{
                    name : firstName + ' ' + surName,
                    email : email,
                    password : password,
                    phoneNumber: phoneno,
                    role: Role,
                });
                console.log("I am getting response from server", response);
                Navigate('/login')
            } catch (e) {
                console.log("I am getting error from server", e)              
            }
        }
        else{
            alert("Please completely filled all fields")
        }

    }
    
        return <div>
        <form>
        <h1>Sign up Form</h1><br/>
        <label>Name</label><br/>
        <input name="fName" type={"text"} placeholder="First Name" onChange={onTextFieldChange} value={firstName}></input><br/>
        <label>SurName</label><br/>
        <input name="sName" type={"text"} placeholder="Second Name" onChange={onTextFieldChange} value={surName}></input><br/>
        <label>Email</label><br/>
        <input name="mail" type={"email"} placeholder="abcxxxx@gmail.com" onChange={onTextFieldChange} value={email}></input><br/>
        <label>Password</label><br/>
        <input name="pwd" type={"password"} placeholder="********" onChange={onTextFieldChange} value={password}></input><br/>
        <label>Phone Number</label><br/>
        <input type={"text"} name= "number" onChange={onTextFieldChange} value={phoneno} placeholder="03123456789"></input>
        <br/>
        <label>Select Role</label>
        <br/>
        <select name= "role" onChange={onTextFieldChange} value={Role}>
        <option>Choose</option>
        <option value={"Admin"}>Admin</option>
        <option value={"Super Admin"}>Super Admin</option>
        <option value={"Contractor"}>Contractor</option>
        <option value={"Employee"}>Employee</option>
        <option value={"Manager"}>Manager</option>
        </select>
        <input type={"button"} value={"Submit"} onClick={handleRegister} ></input><br/>
        </form>
        <button>
        <Link to={"/login"} >Already have account</Link>
        </button>
        </div>
    
}