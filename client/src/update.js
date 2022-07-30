import React, {useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./addNew.css"

export default function Update (){

    
    const [firstName, setFirstName] = useState();
    const [surName, setSurName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const nav = useLocation();
    const Navigate = useNavigate()
    const [user] = useState(nav.state.user);
    const onTextFieldChange = (e) => {
        console.log(e.target.name)
        
        if(e.target.name=== 'fName'){
            setFirstName(e.target.value)
        }else if(e.target.name=== 'sName'){
            setSurName(e.target.value)
        }else if(e.target.name=== 'phone'){
            setPhoneNumber(e.target.value)
        }
    }
    const handleRegister = async (e)=>{

        console.log(firstName)
        console.log(surName)
        console.log(phoneNumber)
        console.log(user.email)
        // if (firstName && surName  && phoneNumber ) {
            console.log("running");
            try {
                const response = await axios.put("http://localhost:4000/update",{
                    email : user.email,
                    newName : firstName + ' ' + surName,
                    newPhoneNumber: phoneNumber,
                });
                console.log("I am getting response from server", response);
                Navigate('/welcome')
            } catch (e) {
                console.log("I am getting error from server", e)              
            }
        // }
        // else{
        //     alert("Please completely filled all fields")
        // }

    }
    return <div className="form">
    <form className="centre">
    <h1 className="heading">Update User</h1><br/>
    <label className="heading">First Name</label><br/>
    <input name="fName" type={"name"}  onChange={onTextFieldChange} value={firstName}></input><br/>
    <label className="heading">Sur Name</label><br/>
    <input name="sName" type={"name"}  onChange={onTextFieldChange} value={surName}></input><br/>
    <label className="heading">New Phone Number</label><br/>
    <input name="phone" type={"text"}  onChange={onTextFieldChange} value={phoneNumber}></input><br/>
        
        
        <input className="heading" type={"button"} value={"Update User"} onClick={handleRegister}></input>
        </form>
        </div>
    }