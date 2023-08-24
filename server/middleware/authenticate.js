const authenticate = async (req, res, next) => {
 // }
 try{
    next();
}catch(err){
    res.status(401).send({'error':true,'response':'Unauthorized: No token provided'});
    console.log(err);
}

}


module.exports = authenticate;