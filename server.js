const { nameformat, mailformat, passformat, phoneno } = require( "./src/validation");
const express = require ("express");
const { contentType } = require("express/lib/response");
const app = express();
app.use(express.json());

app.post( "/register",(req, res)=>{
    const { name, email, password, phoneNumber } = req.body;
    if(name.match(nameformat) && 
    email.match(mailformat) && 
    password.match(passformat)&&
    phoneNumber.match(phoneno)){
        res.send({message: "Registered successfully"});
    }
else
{
    res.status(401).send({ error : "Invalid Credentials" });
}
})

app.listen(4000 , ()=>{
    console.log("server is live on port 4000")
});