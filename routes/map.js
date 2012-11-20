var moment = require('moment');

exports.show = function(req, res){
    res.render('map', {
        title:'Mapa - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};