const mongoose=require("mongoose");
exports.connectMongoose=()=>{
    mongoose.connect("mongodb+srv://ashishp1729:Bitch123@cluster0.wnzrklh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((e)=>{
        console.log("Connected to MongoDB");
    }).catch((e)=>{
        console.log(e)
    })
}

const userSchema=new mongoose.Schema({
   email:String,
   password:String,
   admin:Boolean
})
const noteSchema=new mongoose.Schema({
    
    Content:String,
    email:String
})
const ChatSchema=mongoose.Schema({

    from:String,
    to:String,
    Content:String
})
const ProductSchema=mongoose.Schema({
    name:String,
    Description:String,
    Price:String,
    Rating:[{type:Number,min:0, max:5
    }],
    manufacturer:String
})
exports.chats=mongoose.model("chats",ChatSchema);
exports.note=mongoose.model("notes",noteSchema);
exports.User1=mongoose.model("user1",userSchema);
exports.Product=mongoose.model("products",ProductSchema);