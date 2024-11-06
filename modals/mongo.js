const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MiniWhatsap');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chatSchema=mongoose.Schema({
    from:String,
    msg:String,
    to:String,
    created_at:Date
})

let chats=mongoose.model("chat",chatSchema)
module.exports=chats