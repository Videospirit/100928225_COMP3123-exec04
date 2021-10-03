let express = require('express')
let app = express()

//http://localhost:8089/hello/
app.get("/hello", (req,res) =>{
    res.send("Hello Express JS")
})


//Query String Parameter
//http://localhost:8089/user?fnm=Pritesh&lnm=Patel
app.get("/user",(req,res)=>{
    let fnm = req.query.fnm
    let last_name = req.query["lnm"]
    
    //Create JS object
    response = {
        fnm, 
        last_name,
    }
    res.send(response)
})



//Route Path Parameter
//http://localhost:8089/user/Pritesh/Patel
app.post("/user/:fnm/:lnm", (req,res) => {
    console.log("error")
    let fnm = req.params.fnm
    let last_name = req.params["lnm"]
  
    //Create JS object
    response = {
        fnm, 
        last_name,
    }
    res.send(response)
})

let server = app.listen(8089, () =>{
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host , port)
})