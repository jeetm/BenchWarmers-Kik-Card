var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser.parseUrl('http://www.sportsnet.ca/basketball/index-pics-ontario.xml').on('complete', callback);
};
