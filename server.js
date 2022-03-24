const { nameformat, mailformat, passformat, phoneno } = require( "./src/validation");
const express = require ("express");
const { contentType } = require("express/lib/response");
// sconst userData = require('./src/users.json');
const fs = require('fs');



const app = express();
app.use(express.json());
const userData = fs.readFileSync("./users.json",{encoding : "utf8"});

let users;
if (userData) {
    users = JSON.parse(userData ?? "");
}


const writeData = (user) => {
    // console.log(user)
    
    fs.appendFileSync("./users.json", JSON.stringify(user))
}

const readData = () => {
    
    if(fs.existsSync("./users.json")){
        const allUsers = fs.readFileSync("./users.json")
        return JSON.parse(allUsers)
    }
    return []
}

app.post( "/register",(req, res)=>{
    const { name, email, password, phoneNumber } = req.body;
    // users => array of all users

    if(name.match(nameformat) && 
    email.match(mailformat) && 
    password.match(passformat)&&
    phoneNumber.match(phoneno)) {
        // Update user data into json file
        // or
        /// new insert

        let userFound = -1;
        if(users){
            for (let i = 0; i < users.length; i ++) {
            
                if (users[i].email === email) {
                userFound = i;
                break;
            }
        }
    }
        /*const found = users.find((innerUser) => innerUser.email === email);
        if (found !== -1) {
            // found object ...
        }*/

        if (userFound === -1) {const user = {
            name,
            email,
            password,
            phoneNumber
        };
        // if (users === undefined) {
        //     users = [user];
        // }


        let oldUsers = readData()
        // console.log(oldUsers)
        oldUsers.push(writeData(user))
        
        
        res.send({message: "Registered successfully"});

        } else {
             // email found 
            // i : is the index of that userwhere email is matched.
            users[userFound].name = name;
            users[userFound].phoneNumber = phoneNumber;
            users[userFound].password = password;
            writeData(users);
        
        }
       }
else
{
    res.status(401).send({ error : "Invalid Credentials" });
}
})
let userMilGya = 0;
app.post( "/login",(req, res)=>{
    const { email, password } = req.body;
    for (let i = 0; i < users.length; i ++) {
        if ( email === users[i].email && password === users[i].password) {
            userMilGya = 1;
        } 
    }
    if(userMilGya = 1)
    res.send({message:"Login Successfull"})
    else {
        res.send({message:"Login Failed"})
    }
})



app.listen(4000 , ()=>{
    console.log("server is live on port 4000")
});