module.exports = (app) => {
    app.post("/api/login",  (req, res) => {
        console.log(req.body)
        if(req.body.email == "abc@xyz.com" && req.body.password == "test123")
        {
        res.send({ message: "login successul" }); 
        } 
        else {
            res.status(401).send({ error : "Invalid Credentials" });
        }     
    });
}