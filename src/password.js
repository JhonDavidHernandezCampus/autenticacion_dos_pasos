import passport from "passport";
import { Strategy } from 'passport-discord';

passport.serializeUser((user, done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
});

passport.use(new Strategy({
    clientID:"1134114746329739284",
    clientSecret:"W5RpQC_NpbgnzBk0csrbJ0geEH6rtuO_ ",
    callbackURL:"http://localhost:4233/login",
    scope:["identify", "guilds"]
}, (accesToken , refeshToken, profile) =>{
    process.nextTick(()=>{
        return cb(null, profile);
    })
}))

export default passport;