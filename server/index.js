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
    
    con.query("insert into instab(name,email,pwd,gender,age)values(?,?,?,?,?)",[name,email,pwd,gender,age],(err,result)=>{
        if(err){
            throw err}
        
            else
            {
                res.send("ins success")
            }
    
    

        })
    })
    app.get('/view',function(req,res){
        con.query("SELECT * FROM instab",(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.send(result)
            }
        })
    })
    app.delete('/deleteEmp/:id',function(req,res){
        const id=req.params.id
        con.query("DELETE FROM instab WHERE id=?",[id],(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.send("Deleted successfully")
            }
        })
    })
    app.get('/read/:id',function(req,res){
        const query="select * from instab where id=?"
        const id=req.params.id
        con.query(query,[id],(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.send(result)
            }
        })
    })


    app.put('/update/:id',function(req,res){
        const query="UPDATE instab SET name=?, email=?, pwd=?, gender=?, age=? WHERE id=?"
        const id=req.params.id
    
        const name=req.body.nname
        const email=req.body.nemail
        const pwd=req.body.npwd
        const gender=req.body.ngender
        const age=req.body.nage
    
        con.query(query,[name,email,pwd,gender,age,id],(err,result)=>{
            if(err){
                throw err
            }else{
                res.send(result)
            }
        })
    })
    
    app.put('/update2/:id',function(req,res){
        const query="UPDATE instab SET name=?, email=?, pwd=?, gender=?, age=? WHERE id=?"
        const id=req.params.id
    
        const name=req.body.nname
        const email=req.body.nemail
        const pwd=req.body.npwd
        const gender=req.body.ngender
        const age=req.body.nage
    
        con.query(query,[name,email,pwd,gender,age,id],(err,result)=>{
            if(err){
                throw err
            }else{
                res.send(result)
            }
        })
    })
    
    
    
    