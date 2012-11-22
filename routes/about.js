var moment = require('moment');

exports.contact = function(req, res){
    res.render('contact', {
        title:'Kontakty - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};

exports.about = function(req, res){
    res.render('about', {
        title:'O... - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};