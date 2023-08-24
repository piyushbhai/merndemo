const express = require('express');
const router =express.Router();
const authenticate = require('../middleware/authenticate');



// app.use(cors());
// const app = express()

// router.post('update-profile',authenticate, async function(req,res){
//     res.send("hiii")
// })

router.post('/', authenticate ,async (req, res) => {
    try{
        res.send("Failed to Update Profile.");
    }catch(err){
        res.status(500).json({error:"Failed to Update Profile."});
    }
})


module.exports = router;