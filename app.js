require("dotenv").config();
const express = require("express")
const app = express();
const ConnectDb = require("./db/connection")
const Register = require("./models/register")
const PORT = process.env.PORT || 4000


const main = async ()=>{
    await ConnectDb(process.env.MONGODB_URL);
 }
    
main()

app.use(express.json())
app.set("view engine","hbs")
app.use(express.urlencoded({extended:false}));

console.log(ConnectDb)
app.get("",(req,res)=>{
    res.render("index")
})



app.get("/emp",(req,res)=>{
  res.render("emp")
})

app.post("",async(req,res)=>{

     const val =  { 
      name:req.body.name,
      course:req.body.course
    }

      const reg = Register.insertMany([val])

     // const data = await reg.save()
      // res.send(data)
      console.log(val)
       res.render("emp")

    
})





app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`)
})