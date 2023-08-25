const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/piyush';

mongoose.connect(db,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection successful");    
}).catch((err)=>{
    console.log(err);
    console.log("No connection");
})
