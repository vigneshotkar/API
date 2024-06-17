require ("./mongoose")
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
// const { vignesh, User } = require("./astoSchema"); // Importing models
const {vignesh,User,rashi,Rata,} =require("./RatanSchema")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single("pimage");

// POST method for creating a new product
app.post("/vignesh", async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newvignesh = new  vignesh({
                    pid:req.body.pid,
                    pname: req.body.pname,
                    pdesc:req.body.pdesc,
                    pimage: "http://localhost:4000/uploads/" + req.file.filename
                });
                 newvignesh.save();
                res.send("File Uploaded")
            
        }
    });
});


app.get("/vignesh",async (req,resp)=>{
        const data=await vignesh.find() 
        resp.send(data)
    })

//user collection
app.post("/user", async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newUser = new User({
                    pid: req.body.pid,
                    pname: req.body.username,
                   pemail:req.body.pemail
                });
                 newUser.save()
                res.send("File Uploaded")
            
        }
    });
});



app.get("/user",async (req,resp)=>{
    const users=await User.find()
    resp.send(users)
})



app.post("/rashi",(req,resp)=>{
    upload(req,resp,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newrashi =new rashi({
                    pid:req.body.pid,
                    pname: req.body.pname,
                    pdesc:req.body.pdesc,
                    pimage: "http://localhost:4000/uploads/" + req.file.filename
            })
            newrashi.save()
            resp.send("File Uploaded")
        }
    })
})
    app.get("/rashi",async (req,resp)=>{
        const rashis=await rashi.find() 
        resp.send(rashis)
    })

    app.post("/Rata",(req,resp)=>{
        upload(req,resp,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                const newRata =new Rata({
                        pid:req.body.pid,
                        pname: req.body.pname,
                        pimage: "http://localhost:4000/uploads/" + req.file.filename
                })
                newRata.save()
                resp.send("File Uploaded")
            }
        })
    })

    app.get("/Rata",async (req,resp)=>{
        const Ratas=await Rata.find() 
        resp.send(Ratas)
    })

app.listen(4000)