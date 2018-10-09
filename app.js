const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();




app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Routes
//app.get('/', routes.test);
app.get('/', routes.home);

// set up port 
const port = 3000;
app.listen(port, () => console.log(`App listenining on port ${port}`));