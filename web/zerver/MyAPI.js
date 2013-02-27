var feedparser1 = require('../../node_modules/feedparser');
var feedparser2 = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser1.parseUrl('http://www.sportsnet.ca/basketball/index-pics-ontario.xml').on('complete', callback);
};

exports.getInfo = function (callback) {
	feedparser2.parseUrl('http://www.sportsnet.ca/football/nfl/index-pics-ontario.xml').on('complete', callback);
}

