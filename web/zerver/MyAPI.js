var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/basketball/index-pics-ontario.xml').on('complete', callback);
};

exports.getInfo = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/football/nfl/index-pics-ontario.xml').on('complete', callback);
};

exports.getMLB = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/baseball/index-pics-ontario.xml').on('complete', callback);
};

exports.getNhl = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/hockey/index-pics-ontario.xml').on('complete', callback);
};