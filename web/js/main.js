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
  wrapper.innerHTML='';

  var slideviewer = new SlideViewer(wrapper, source, {
    startAt: feedNum,
    length: 4,
  });

  page.addEventListener('appLayout', function() {
    slideviewer.refreshSize();
  });

  if(App.platform == 'android') {
    slideviewer.disable3d();
    slideviewer.on('move', function() {
      slideviewer.enable3d();
    });
  }

  function source(i) {
    var list = $('<div />').css("height", "100%");
    var loadingSpinner = $('<div />').addClass('loader');
    list.append(loadingSpinner);
    if (i === 0) {
      MyAPI.getArticles(function (meta,articles) {
        populateNBAList(articles, list, loadingSpinner);
      });
    }
    else if(i === 1) {
      MyAPI.getInfo(function (meta,articles) {
        populateNFLList(articles, list, loadingSpinner);
      });
    }

    else if(i === 2) {
      MyAPI.getMLB(function (meta,articles) {
        populateMLBList(articles, list, loadingSpinner);
      });
    }

    else if(i === 3) {
      MyAPI.getNhl(function (meta,articles) {
        populateNHLList(articles, list, loadingSpinner);
      });
    }

    return list[0];
  }

  var sportButton = $(page).find('#sportSelect');
  var categories = $(page).find('.sport');
  var nbaBut = $(page).find('#nba').clickable();
  var nflBut = $(page).find('#nfl').clickable();
  var nhlBut = $(page).find('#nhl').clickable();
  var mlbBut = $(page).find('#mlb').clickable();

  categories.addClass('hide');
  sportButton.on('click', function() {
    categories.toggleClass('hide');
  });

  nbaBut.on('click', function() {
    var text = $(page).find('#sportTitle').text().slice(13,17);
    console.log(text);
    if (text != 'NBA') {
      slideviewer.setPage(0);
    }
    categories.toggleClass('hide');
  });

  nhlBut.on('click', function() {
var text = $(page).find('#sportTitle').text().slice(13,17);
    console.log(text);
    if (text != 'NHL') {
    slideviewer.setPage(3);
    }
    categories.toggleClass('hide');
  });

  nflBut.on('click', function() {
var text = $(page).find('#sportTitle').text().slice(13,17);
    console.log(text);
    if (text != 'NFL') {
    slideviewer.setPage(1);
    }
    categories.toggleClass('hide');
  });

  mlbBut.on('click', function() {
var text = $(page).find('#sportTitle').text().slice(13,17);
    console.log(text);
    if (text != 'MLB') {
    slideviewer.setPage(2);
    }
    categories.toggleClass('hide');
  });

  function populateNBAList(data, sportList, spinner) {
    console.log(data);
    var i = 0;
    spinner.remove();
    data.forEach(function (item) {

        i++;
        if (i >= 16) {
          return;
        }
        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['enclosure'].attr('ur');

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').text(artSum);
        var button = $('<div />').addClass('app-button myButtons');
        var image = $('<img />').attr('src', imgLink);
        var kikbutton = $('<div />').addClass('app-button myButtons');

        sportList.append(section);
        section.append(description);
        section.append(button);
        section.append(image);
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

  function populateNFLList(data, sportList, spinner) {
    var i = 0;
    spinner.remove();   
    data.forEach(function (item) {
        i++;
        if (i >= 16) {
          return;
        }
        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['meta']['image']['url'];

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

  function populateMLBList(data, sportList, spinner) {
    var i = 0;
    spinner.remove();
    data.forEach(function (item) {

        i++;
        if (i >= 16) {
          return;
        }
        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['meta']['image']['url'];

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

        var passingData2 = {'object': item, 'list': 'mlb'};
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
  function populateNHLList(data, sportList, spinner) {
    var i = 0;
    spinner.remove();
    data.forEach(function (item) {

        i++;
        if (i >= 16) {
          return;
        }

        var artTitle = item['title'];
        var artSum = item['summary'];
        var artDate = item['pubDate'];
        var artLink = item['link'];
        var imgLink = item['meta']['image']['url'];

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

    if(App.platform == 'android' && slideviewer) {
      slideviewer.disable3d();
    }

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
    var imgLink = data['meta']['image']['url'];
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
  var imagesrc = object[meta][image][url];
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
