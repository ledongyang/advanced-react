import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import {data} from './testData';

// Initialize application
const app = express();

// Use express staic middleware to serve public directory
app.use(express.static('public'));
// Set view engine to ejs
app.set('view engine', 'ejs');

// '/' endpoint
app.get('/', function(req, res) {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

// data api endpoint
app.get('/data', function(req, res) {
  res.send(data);
});

// Listen to a port
app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}.`);
});
