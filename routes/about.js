var moment = require('moment');

exports.contact = function(req, res){
    res.render('about/contact', {
        title:'Kontakty - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};

exports.about = function(req, res){
    res.render('about/about', {
        title:'O... - Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};