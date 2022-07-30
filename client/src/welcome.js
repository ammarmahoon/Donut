import React, {useEffect, useState} from "react";
import "./welcome.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Welcome (){

    const [data, setData]= useState();
    const nav = useLocation();
    console.log(nav.state);
    const Navigate =useNavigate();
    const user = localStorage.getItem('loggedInUser');

    const getData = async (searchString) => {
        try {
            const response = await axios.post('http://localhost:4000/searchuser',{
                searchStr : searchString
            })
            console.log(response);
            setData(response.data);
        } catch (e) {
            console.log('I am getting error',e);
        }
    }
    // screen reload based on second parameter
    useEffect(()=> {
        console.log(user.role);        
        if (!user) {
            return Navigate('/login');
        } else if (!data && user.role === 'Super Admin') {
            getData(undefined);
                    
                }   
    },[data, user]);


    const deleteUser =async (phoneNumber)=>{
        console.log(phoneNumber)
        try {
            const response = await axios.delete("http://localhost:4000/deleteuser?phoneNumber="+phoneNumber,{               
            });
            console.log("I am getting response from server", response);
        } catch (e) {
            console.log("I am getting error from server", e)              
        }
    }

    const update = (user) => {
        Navigate('/update', { state: user });
    }
    const updateUser =async (email)=>{
        try {
            const response = await axios.post('http://localhost:4000/searchuser',{
                searchStr : email
            })
            console.log(response);
            Navigate('/update', {state:response.data})
        } catch (e) {
            console.log('I am getting error',e);
        }
    }
    const searchUser = async (e)=>{
        if (e.target.value.length > 2) {
            await getData(e.target.value);
        }else if(e.target.value.length == 0)
        await getData(undefined)
    }

       const addNewUser = ()=>{
           if (localStorage.getItem("login")== "success") {
               Navigate("/addNew")
           }
        }
     const logout = (props)=>{
        Navigate("/")
        localStorage.removeItem('login')
     }  
    
    if(nav?.state?.userDetail?.role=== 'Super Admin'){
        return <div className="app">
        
        <h1 className="heading">Congratulations! Successfully Login</h1>
        <h2 className="heading">All Users</h2>
        <input className="heading" type="button" value="Log out" onClick={logout}></input>
        <input className="heading" type="button" value="Add new" onClick={addNewUser}></input>
        <input className="heading" type="text" placeholder="Search User" onChange={searchUser}></input>
        
        
        <table >
                <tr>
                    <th className="heading">Name</th>
                    <th className="heading">Role</th>
                    <th className="heading">Action</th>
                </tr>
                {data && data.users.map((user, index) => {
                    return(
                    <tr key={index}>
                        <td className="heading">{user.name}</td>
                        <td className="heading">{user.role}</td>
                        <td ><input className="heading" type="button" value="Delete" onClick={() => deleteUser(user.phoneNumber)}></input>
                         <input className="heading" type="button" value="Update" onClick={() => update(user)   
                         }></input></td>
                    </tr>
                )
                })}
            </table>
        
    
    </div>
    }else{
        return <div>
        <button>
        <Link className="heading" to={"/"}>Log out</Link>
        </button>
    <h1>Congratulations! Successfully Login</h1>
    </div>
    }
    
    
}




// () => updateUser(user.phoneNumber)