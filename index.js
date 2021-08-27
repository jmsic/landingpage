const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// set handlebars middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// set handle routes
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: "this is stuff",
    	bear: "Hello bear"
    });
});


app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));