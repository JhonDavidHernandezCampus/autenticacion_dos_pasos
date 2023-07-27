import Express  from "express";
import cookieParser from "cookie-parser";
import { nanoid } from "nanoid";

const app = Express();
app.use(cookieParser());

app.get('/auth',(req,res)=>{
    res.cookie('session', 3224757531, {
        httpOnly:true 
    })
    res.send("Estamos bien");
})
app.get('/pedir', (req,res)=>{
    res.send(req.cookies);
})


app.listen(4233,()=>{
    console.log('http://localhost:4233');
})