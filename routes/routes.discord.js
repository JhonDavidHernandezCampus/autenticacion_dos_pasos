import expres from 'express';
import passport from './../src/password.js';
import authVerify from './../src/auth.js';

const router = expres.Router();

router.get('/login', passport.authenticate("discord",{failureRedirect: '/home'}),(req,res)=>{
    console.log("dentro");
    res.redirect("/home/perfil.html");
});

router.get('/perfil', authVerify, (req,res)=> {
    res.send(req.user);
})

export default router;