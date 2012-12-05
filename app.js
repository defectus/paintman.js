/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , map = require('./routes/map')
    , gallery = require('./routes/gallery')    
    , contactForm = require('./routes/contactForm.js')
    , about = require('./routes/about')
    , services = require('./routes/services.js')
    , http = require('http')
    , path = require('path')
    , common = require('./services/common')    
    , moment = require('moment');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'html')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
    common.gmapKey = 'AIzaSyAfyHb-V7BBWmU2d24H5TAJwOl39_wjUGY'
});

app.configure('production', function () {
    common.gmapKey = 'AIzaSyChws2jvPF4rQHny3NCRzRQZJq_wanSbEw';
});

app.get('/', routes.index);
app.get('/Robots.txt', routes.robots);
app.get('/map', map.show);
app.get('/services', services.show);
app.get('/contact', about.contact);
app.get('/about', about.about);
app.get('/gallery', gallery.show);
app.get('/contactForm/show', contactForm.show);
app.get('/contactForm/save', contactForm.save);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
