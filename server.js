const express = require ("express");
const { contentType } = require("express/lib/response");
const app = express();

app.use(express.json());

app.post( "/login",(req, res)=>{
    var nameformat = (/^[A-Za-z\s]*$/)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var phoneno = /^\d{11}$/
    if(req.body.name.match(nameformat) && 
    req.body.email.match(mailformat) && 
    req.body.password.match(passformat)&&
    req.body.phoneNumber.match(phoneno)){
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