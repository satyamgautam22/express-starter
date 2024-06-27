const expres=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")

const serverconfig=require(`./config/servercongif`);
const connectDb = require("./config/dbconfig");
const app=expres();
const  PORT=process.env.PORT
mongoose.connect("mongodb://localhost:27017/", {
   
 });


 app.use(bodyparser.json());
 app.use(bodyparser.text());
 app.use(bodyparser.urlencoded())

app.post("/ping",(req,res)=>{
    console.log(req.body)
    return res.json({message:"pong"})

})

app.listen(serverconfig.PORT,async()=>{
    await connectDb()
    console.log(`server started at port no ${serverconfig.PORT}`)

console.log(process.env.PORT)
})


