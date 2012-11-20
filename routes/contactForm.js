/*
 * GET home page.
 */
var moment = require('moment');

exports.show = function (req, res) {
    res.render('index', {
        title:'Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};

exports.save = function (req, res) {
    res.render('index', {
        title:'Oldřich Milostný, malířské práce',
        flash:null,
        status: 'Server status OK (@ ' + moment().format('hh:mm:ss')});
};