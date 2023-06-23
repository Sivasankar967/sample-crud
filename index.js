const express= require('express')
const mongoose= require('mongoose');
const studentrouter= require("./Routes/students");

const app=express();
const url= 'mongodb://localhost:27017';
mongoose.connect(url,{useNewUrlParser:true});

const connect=mongoose.connection;  
app.use(express.json())
try{
   connect.on('open',()=>{
     console.log('connected');
   })
}catch(error){
    console.log( 'error:' +err);
}
app.use('/students',studentrouter);


const port =8080;
app.listen(port,()=>{
    console.log('server strated')
})
