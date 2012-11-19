/*
 * GET home page.
 */
var moment = require('moment');

exports.index = function (req, res) {
    res.render('index', {
        title:'Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};

exports.services = function (req, res) {
    res.render('services', {
        title:'Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};