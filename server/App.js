const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express()

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());
app.use('uploads',express.static('uploads'));

app.use(require("./Routes/route"))





app.listen(5000)

