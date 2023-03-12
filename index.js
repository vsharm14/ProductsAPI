const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
const path = require('path');
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"assets")));
const db = require('./config/mongoose');
app.set('views','./views');
app.use('/',require('./routes'));

app.listen(port, ()=>{
    console.log("server is running at address:",port);
});
