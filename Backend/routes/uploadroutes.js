const express=require("express");
const app=express();
const multer=require('multer')
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')));
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)


    }
});
var upload=multer({storage:storage});
const uploadController=require('../controllers/uploadController')
app.post('/upload',upload.single('file'),uploadController.importData);
module.exports=app






