const authVerify = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }else{
        res.send({data: "sesion finalizada o fallida"})
    }
}

export default authVerify;