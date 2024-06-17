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
    pid:Number,
    pname: String,
    pdesc:String,
    pimage: String
})

const userSchema = mongoose.Schema({  
    pid: Number,
    pname: String,
    pemail: String
});

const RataSchema = mongoose.Schema({
    pid:Number,
    pname:String,
    pimage:String
});

const vignesh = mongoose.model("vignesh", astoschema);
const User = mongoose.model("User", userSchema);
const rashi = mongoose.model("rashi", rashiSchema);
const Rata = mongoose.model("ratan",RataSchema)

module.exports = { vignesh,User,rashi,Rata};

