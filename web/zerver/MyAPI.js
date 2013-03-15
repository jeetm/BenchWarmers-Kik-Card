var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/feed/').on('complete', callback);
};

exports.getInfo = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/feed/').on('complete', callback);
};

exports.getMLB = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/feed/').on('complete', callback);
};

exports.getNhl = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/feed/').on('complete', callback);
};

