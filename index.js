const express = require('express')

const covid = require('corona-info'); 

const bodyParser = require('body-parser')

const app = express()

app.set('view engine',"ejs")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res) => {
    res.render("test")
})

app.post('/getdata',(req,res) => {
  var country = req.body.country

  covid.findData({ country: country }).then(response => {
    console.log(response);

    res.json({
        data:response
    })
  });
})

app.listen(5000,() => {
    console.log("App is listening on port 5000")
})