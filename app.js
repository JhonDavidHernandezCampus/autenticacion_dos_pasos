import Express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import Router from './routes/routes.discord.js';

const app = Express();
app.use(cookieParser());
app.use(Express.urlencoded({extended:false}))
app.use(session({
    secret:"Estaesmiclavealaverga",
    resave:false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/home',Express.static('view'));

app.use('/', Router);

//app.use('/',Router);


/* 
 * * Este es un pequeño ejemplo del uso de cookies 
*/

// app.get('/auth',(req,res)=>{
//     res.cookie('session', 3224757531, {
//         httpOnly:true 
//     })
//     res.send("Estamos bien");
// }) 
// app.get('/pedir', (req,res)=>{
//     res.send(req.cookies);
// })


app.listen(4233,()=>{
    console.log('http://localhost:4233');
})