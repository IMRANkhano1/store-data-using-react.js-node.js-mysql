const express = require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

app.listen(8080)
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'mernins'  
})
app.post('/saveemp',function(req,res){
    const name=req.body.name
    const email=req.body.email
    const pwd=req.body.pwd
    const gender=req.body.gender
    const age=req.body.age
    
    con.query("insert into instab(name,email,psd,gender,age)values(?,?,?,?,?)",[name,email,pwd,gender,age],(err,result)=>{
        if(err){
            throw err}
        
            else
            {
                res.send("ins success")
            }
    
    

        })
    })