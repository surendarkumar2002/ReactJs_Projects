const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const EmployeeModel=require('./model/employee')

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/login-emp");

app.post('/',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=> res.json(employee))
    .catch(err=> res.json(err)
    )
    
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if (user) {
            if(user.password===password){
                res.json("success")
            }
            else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("Not valid email")
        }
    })
})


app.listen(8000,()=>{
    console.log("Server is running 8000")
})