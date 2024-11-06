const express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");
let chats = require("./modals/mongo");

app.get("/chats", async (req, res) => {
    let allChats = await chats.find();
    res.render("home.ejs", { allChats });
});

app.get("/chats/new", (req, res) => {  
    res.render("form.ejs");
});
app.post("/chats",async (req,res)=>{
console.log(req.body);
let { from, msg, to } = req.body;
await chats.insertMany([{
    from,msg,to
}])
res.send("chat has been successfully added")
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});