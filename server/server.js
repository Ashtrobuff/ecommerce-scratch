const express=require('express');
const app=express();
const{connectMongoose,User1,note,chats}=require("./database.js")
const cors=require("cors")
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken')
const cookieParser=require('cookie-parser')
connectMongoose();
const {mongoose}=require('mongoose');
const { Product } = require('./database.js');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.post("/createnote",async (req,res)=>{

    const newnote=await note.create(req.body);
    res.status(201).send(newnote)
})
app.delete("/deletenote/:id",  async(req,res)=>{
    try {
        await note.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})
app.get("/getall", async  (req,res)=>{
    const {email}=req.query
    console.log(email)
 const  note1= await note.find({email});
 res.json(
note1
 )
})
app.put("/updatenote/:id",async(req,res)=>{

     let note2=await note.findByIdAndUpdate(req.params.id,req.body,{
            new:true,useFindAndModify:true,ruunValidators:true
        })
    

res.status(200).json({
    "success":true,
    note2
})
});
app.post("/register",async(req,res)=>{

    const {email,password}=req.body;
    const useralready=await User1.find({email});
    if(useralready.length!=0){
        res.send("user already exists1")
    }else{
        const newuser=await User1.create(req.body);
        res.status(201).send(newuser);
    }
        
    
});
app.post("/login",async (req,res)=>{
    const { email, password } = req.body;

    try {
      // Find user by emailconst 

      const user = await User1.findOne({email});
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      console.log(user)
      // Compare passwords
      const isPasswordValid = ()=>{
        if(password==user.password)
            return true;
      }
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email: user.email ,admin:user.admin}, 'fhdsfhdsjhdjjdd89334', { expiresIn: '1h' });
  
      res.json(token);
  
    } catch (error) {
      console.error('Error logging in:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.post("/sendchat", async (req,res)=>{
    const newchat=await chats.create(req.body);
    res.status(201).json(newchat)

})
app.get("/getchat",async(req,res)=>{

    const _from=req.query.to;
    const _to=req.query.from;
    console.log("chat req received")
  const chats1=  await chats.find({
    $or: [
        { from: _from, to: _to },
        { from: _to, to: _from }
    ]
});
    res.status(200).json(chats1)
})

app.get("/getusers",async(req,res)=>{
    const userlist=await User1.find();
    res.status(201).json(userlist)
})
app.post("/addproduct",async(req,res)=>{
    const data=req.body;
   const product= await Product.create(data);
    res.status(200).json(product)
})
app.get("/getproducts",async(req,res)=>{
    const prods= await Product.find();
    res.status(200).json(prods)
})
app.listen("3000",()=>{
    console.log("server running on port")
})