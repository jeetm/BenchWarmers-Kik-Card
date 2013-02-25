var feedparser = require('../../node_modules/feedparser');

exports.getArticles = function (callback) {
	feedparser.parseUrl('http://news.yahoo.com/rss/basketball').on('complete', callback);
};
