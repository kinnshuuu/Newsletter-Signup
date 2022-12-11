const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("httpsq");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/signup.html");
});

app.post("/" ,function(req,res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;


    const data = {
        members : [
            {
                email_address: email,
                status: subscribed,
                merge_fields:{
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    }
    const jsonData =  JSON.stringify(data);
    const url  = "https://us21.api.mailchimp.com/3.0/lists/f0d617a726";

    const options= {
        method: "POST",
        auth : "kinshu1:7d720358f15958083a8dae8104c02c22-us21"
    }

    https.request(url,options,function(response){
        response.on("data",function(data)
        {
            console.log(JSON.parse(data));
        })
    })
})
app.listen(3000,function()
{
    console.log("Server is running on port 3000...");
});


// api key
// 7d720358f15958083a8dae8104c02c22-us21

// audiance id
// f0d617a726