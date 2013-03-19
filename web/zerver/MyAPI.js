var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser.parseUrl('http://www.skysports.com/rss/0,20514,12375,00.xml').on('complete', callback);
};

exports.getInfo = function (callback) {
	feedparser.parseUrl('http://www.skysports.com/rss/0,20514,12375,00.xml').on('complete', callback);
};

exports.getMLB = function (callback) {
	feedparser.parseUrl('http://www.skysports.com/rss/0,20514,12375,00.xml').on('complete', callback);
};

exports.getNhl = function (callback) {
	feedparser.parseUrl('http://www.skysports.com/rss/0,20514,12375,00.xml').on('complete', callback);
};

