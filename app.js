const express = require("express")
const app = express()
const port = 9000

app.get('/', (req, res) =>{
    res.send("Hello World !")
})

app.listen(port , ()=>{
    console.log(`Example app listing on port ${port}`);
})

