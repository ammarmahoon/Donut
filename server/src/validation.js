module.exports = {
     nameformat : (/^[A-Za-z\s]*$/),
     mailformat : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
     passformat:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
     phoneno : /^\d{11}$/
}