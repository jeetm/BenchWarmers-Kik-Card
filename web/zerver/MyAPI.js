var feeds = [
	'http://www.sportsnet.ca/basketball/index-pics-ontario.xml',
	'http://www.sportsnet.ca/football/nfl/index-pics-ontario.xml',
	'http://www.sportsnet.ca/baseball/index-pics-ontario.xml',
	'http://www.sportsnet.ca/hockey/index-pics-ontario.xml',
];

var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (feedNum, callback) {
	feedparser.parseUrl(feeds[feedNum]).on('complete', callback);
};