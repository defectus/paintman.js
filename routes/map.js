var moment = require('moment');
var common = require('../services/common');

exports.show = function(req, res){
    res.render('map', {
        gmapScript: 'https://maps.googleapis.com/maps/api/js?key=' + common.gmapKey + '&sensor=false',
        title:'Mapa - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};