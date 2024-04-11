// const mongoose=require("mongoose")
// const astoschema=mongoose.Schema({
//         pname:String,
//         pdesc:String,
//         pimage:String
    
// })
// module.exports=mongoose.model("vignesh",astoschema)    

const mongoose = require("mongoose");

const astoschema = mongoose.Schema({
    pid:Number,
    pname: String,
    pdesc:String,
    pimage: String
});

const rashiSchema =mongoose.Schema({
    
})

const userSchema = mongoose.Schema({
    pid: Number,
    pname: String,
    pemail: String
});

const vignesh = mongoose.model("vignesh", astoschema);
const User = mongoose.model("User", userSchema);

module.exports = { vignesh, User };
