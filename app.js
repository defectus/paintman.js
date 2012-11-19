/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , map = require('./routes/map')
    , about = require('./routes/about')
    , services = require('./routes/services.js')
    , http = require('http')
    , path = require('path')
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
});

app.get('/', routes.index);
app.get('/map', map.show);
app.get('/services', services.show);
app.get('/contact', about.contact);
app.get('/about', about.about);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
