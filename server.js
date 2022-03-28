const { nameformat, mailformat, passformat, phoneno } = require( "./src/validation");
const express = require ("express");
const { contentType } = require("express/lib/response");
// sconst userData = require('./src/users.json');
const fs = require('fs');



const app = express();
app.use(express.json());


const writeData = (users) => {
    // console.log(user)
    fs.writeFileSync("./users.json", JSON.stringify(users))
}

const readData = () => {
    
    if(fs.existsSync("./users.json")){
        const allUsers = fs.readFileSync("./users.json", { encoding: "utf-8"});
        if (allUsers) {        
            return JSON.parse(allUsers)
        }
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

        const users = readData();
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
        
        if (userFound === -1) {
            const user = {
            name,
            email,
            password,
            phoneNumber
        };
        // if (users === undefined) {
        //     users = [user];
        // }

        
        users.push(user)
        
        
        writeData(users);
        
        res.send({message: "Registered successfully"});

        } else {
             // email found 
            // i : is the index of that userwhere email is matched.
            res.send({message: "email already exist"});
        
        }
        
       }
else
{
    res.status(401).send({ error : "Invalid Credentials" });
}
})


let userMilGya = 0;
app.post( "/login",(req, res)=>{
    const users = readData();
    const { email, password } = req.body;
    for (let i = 0; i < users.length; i ++) {

        if ( email === users[i].email && password === users[i].password) {
            userMilGya = 1;
        } 
    }
    if(userMilGya == 1)
    res.send({message:"Login Successfull"})
    else {
        res.send({message:"Login Failed"})
    }
})

app.post("/searchuser",(req, res) => {
    let userExist = 0;
    let foundUser ;
    const users = readData();
    const { name } = req.body;
    let allFindUsers = [];
    
    for (let i = 0; i < users.length; i ++) {

        if ( name === users[i].name) {
            userExist = 1;
            foundUser = users[i];
            console.log(foundUser)
            allFindUsers.push(foundUser)
        }
    } 
    if(userExist == 1){
        res.send({ allFindUsers})
    }
    else{
        res.send({message : "User not found"})
    }
})

app.listen(4000 , ()=>{
    console.log("server is live on port 4000")
});