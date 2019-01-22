const express = require('express');
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({extname:'.hbs', defaultLayout:'main.hbs'});

// Express set up
const app = express();
app.use(express.static('public'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Routes
app.get('/', (req, res) => res.render('home'));

// Start server
app.listen(3000, () => console.log('App running at http://localhost:3000'));
