const express = require('express');
const app = express();
const mysql=require('mysql');
const cors=require("cors")

app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'bankinfodb',
});

app.post('/login',(req,res)=>{
    
    const accno=req.body.accno;
    const password=req.body.password;
  
    db.query("SELECT * FROM account WHERE accno = ? AND password = ?", 
    [accno, password], 
    (err, result)=>{
        if(err){
        res.send({err: err});
        }

        if(result){
            res.send(result);
        }else{
            res.send({message: "Wrong account details, Please try again"});
        }
    }
    );
})

app.listen(3004, ()=>
    {
        console.log("running on port 3004");
    });