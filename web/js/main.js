App.populator('articleList', function (page, feed) {
  var feedNum;

  if (feed['list'] === 'nba') {
    feedNum = 0;
  }

  else if (feed['list'] === 'nfl') {
    feedNum = 1;
  }

  else if (feed['list'] === 'mlb') {
    feedNum = 2;
  }

  else if (feed['list'] === 'nhl') {
    feedNum = 3;
  }

  else {
    feedNum = 0;
  }

  changeMainTitle(feedNum);

  var wrapper = page.querySelector('.wrapper');

  var slideviewer = new SlideViewer(wrapper, source, {
    startAt: feedNum,
    length: 4,
  });

  page.addEventListener('appLayout', function() {
    slideviewer.refreshSize();
  });

  function source(i) {
    var list = $('<div />');
    if (i === 0) {
      MyAPI.getArticles(function (meta,articles) {
        populateNBAList(articles, list);
      });
    }
    else if(i === 1) {
      MyAPI.getInfo(function (meta,articles) {
        populateNFLList(articles, list);
      });
    }

    else if(i === 2) {
      MyAPI.getMLB(function (meta,articles) {
        populateMLBList(articles, list);
      });
    }

    else if(i === 3) {
      MyAPI.getNhl(function (meta,articles) {
        populateNHLList(articles, list);
      });
    }

    return list[0];
  }

  function populateNBAList(data, sportList) {

    data.forEach(function (item) {

        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['media:content']['@']['url'];

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button myButtons');
        var kikbutton = $('<div />').addClass('app-button myButtons');

        sportList.append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        var passingData1 = {'object': item, 'list': 'nba'};
        var object = passingData1['object'];
        var list = passingData1['list'];

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(passingData1);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });

        });

      sportList.css('height','100%');

      sportList.scrollable();

      });
  }

  function populateNFLList(data, sportList) {
    data.forEach(function (item) {

        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['media:content']['@']['url'];

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button myButtons');
        var kikbutton = $('<div />').addClass('app-button myButtons');

        sportList.append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        var passingData = {'object': item, 'list': 'nfl'};
        //var object = passingData['item'];
        //var list = passingData['list'];

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(passingData);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });

        });
      sportList.css('height','100%');

      sportList.scrollable();
      });
  }

  function populateMLBList(data, sportList) {

    data.forEach(function (item) {

        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['media:content']['@']['url'];

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button myButtons');
        var kikbutton = $('<div />').addClass('app-button myButtons');

        sportList.append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

<<<<<<< HEAD
        var passingData2 = {'object': item, 'list': 'mlb'};
=======
        var passingData2 = {'object': item, 'list': 'nba'};
>>>>>>> 4cbc7f865f81fd081b4cfda64eee8533cfaabdd2
        var object = passingData2['object'];
        var list = passingData2['list'];

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(passingData2);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });

        });

      sportList.css('height','100%');

      sportList.scrollable();

      });
  }
  function populateNHLList(data, sportList) {

    data.forEach(function (item) {

        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['media:content']['@']['url'];

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button myButtons');
        var kikbutton = $('<div />').addClass('app-button myButtons');

        sportList.append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        var passingData3 = {'object': item, 'list': 'nhl'};
        var object = passingData3['object'];
        var list = passingData3['list'];

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(passingData3);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });

        });

      sportList.css('height','100%');

      sportList.scrollable();

      });
  }


  slideviewer.on('flip', changeMainTitle);

  function changeMainTitle(slideNum) {

    if(slideNum == 0) {
      $(page).find('#sportTitle').text('BenchWarmers: NBA');
    }
    else if(slideNum == 1) {
      $(page).find('#sportTitle').text('BenchWarmers: NFL');
    }
    else if(slideNum == 2) {
      $(page).find('#sportTitle').text('BenchWarmers: MLB');
    }
    else if(slideNum == 3) {
      $(page).find('#sportTitle').text('BenchWarmers: NHL');
    }
  }
});

App.populator('articleView', function(page, data) {
  var object = data['object'];
  var list = data['list'];

  $(page).find('#articleTitle').text('BenchWarmers: ' + list.toUpperCase());
  $(page).find('#kikBut').text('Kik');
  $(page).find('#backBut').text('Back');

  $(page).find('#backBut').clickable().on('click', function() {
    App.load('articleList', 'slide-right');
  });

  $(page).find('#kikBut').clickable().on('click', function() {
    var imgLink = data['media:content']['@']['url'];
    var artTitle = data['title'];
    var x = JSON.stringify(data);
    cards.kik.send({
      title: artTitle,
      text: 'Check out what I found!',
      pic: imgLink,
      big: false,
      linkData: x
    });
  });

  var brief = $('<div />').html(object['description']);
  var summary = brief.text();
  var imagesrc = brief.find('img').attr('src');
  var image = $('<img />').attr('src', imagesrc);
  $(page).find('#artImage').html(image);
  $(page).find('#artBrief').text(summary);
  $(page).find('#readMore').text('Read More').on('click', function() {
    cards.browser.open(object['link']);
  });
});

if (cards.browser && cards.browser.linkData) {
  App.load('articleView', cards.browser.linkData);
}
else {
  App.load('articleList', 'nba');
}
//asdasdasdasdIdeas: Setting max number of stories and dealing with old content messages, displaying time/date of article/source, styling
