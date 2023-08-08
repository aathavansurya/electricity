const express=require('express')
const app =express()
const controller = require('./index.js')
const path = require("path")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const { CLIENT_RENEG_WINDOW } = require('tls')
app.engine('html',require('ejs').renderFile)
app.use(express.static(path.join(__dirname, "public")))
app.set('view html','html')
app.get('/',(req,res)=>{
    res.render('jason.html')
})
app.post('/generate',(req,res)=>{

    controller.genBillData_1(req,res);
})
app.listen('3000',()=>{
    console.log('run succesfully in port 3000')
})