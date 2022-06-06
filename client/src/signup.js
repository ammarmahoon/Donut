
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios"

export default function Signup(){
  const [firstName,setFirstName]=useState();
  const [surName,setSurename]=useState();
  const [Password,setPassword]=useState();
  const [Email,SetEmail]=useState();
  const [phoneno,Setphone]=useState();
  const [Role,Setrole]=useState();
const OnRole = (e)=>{
  console.log(e.target.name);
  if (e.target.name==="role"){
    Setrole(e.target.value);

  }

}
  const onEmail = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="isEmail"){
      SetEmail(e.target.value);
      
    }
  }
  const onPassWord = (e)=>{
    console.log(e.target.name);
    if(e.target.name==="PassWord"){
      setPassword(e.target.value);
    }
    
  }
  const onSureName = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="Sname"){
      setSurename(e.target.value);
    }
  }
  const onphone =(e)=>{ 
    console.log(e.target.name);
    if (e.target.name==="phoneNbr"){
      Setphone(e.target.value);
    }
  }
  const onTextFieldChang = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="fName"){
      setFirstName(e.target.value);
    }
  }
  const navigate = useNavigate();

  const handlRegister =  async (e)=>{
   
    console.log(firstName);
    console.log(surName);
    console.log(Email);
    console.log(Password);
    console.log(phoneno);
    console.log(Role);
    if (firstName && surName && Email && Password && phoneno && Role){
      
      try {
        const response = await axios.post('http://localhost:4000/register', {
          name: firstName +' '+ surName,
          email: Email, 
          password: Password,
          phoneNumber: phoneno,
          role: Role,
        });
        console.log('I am getting response from server', response);
        navigate("/login");
      } catch (e) {
        console.log('I am getting error from server', e);
      }
    } 
    else {
        alert("plz complete all inputs")
      }
    
  }
  
 
   
  
    return <div className="block"> 
    <form>
            <h1>Registration Form </h1>
            <label>firstName </label><br />
            <input name="fName" type="text"  onChange={onTextFieldChang} value={firstName} placeholder="Husnain" /><br />
            <label>Surname </label><br />
            <input name="Sname" type="text" onChange={onSureName} value={surName}  placeholder="Mahoon" /> <br />
            <label>Email</label> <br />
            <input type="email" name="isEmail" onChange={onEmail} value={Email} placeholder="Email" /> <br />
        
            <label>Password</label><br />
            <input name="PassWord" type="password" onChange={onPassWord} value={Password} placeholder="*******" /> <br></br>
            <label>phoneNumber</label><br />
            <input name="phoneNbr" type="text" onChange={onphone} value={phoneno} placeholder="03015701364" /> <br></br>
            <select name="role" onChange={OnRole} value={Role}>
            <option value="Admin">Admin</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Manger">Manger </option>
            <option value="Contractor">Contractor</option>
            <option value="Employee">Employee</option>
            <option value="Customer"> Customer </option>
            </select>
            <input type="button" onClick={handlRegister} name="submit" value="Submit" />

          </form>
          
          <div> <Link to="/Login">I am already a member</Link></div>
          <div>
            <table>
              <li>{Email}</li>
              <li>{Password}</li>
            </table>
          </div>
          
     
    </div>
    }
