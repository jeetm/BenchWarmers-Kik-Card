var FEED_NBA = 0;
var FEED_NFL = 1;
var FEED_MLB = 2;
var FEED_NHL = 3;

App.populator('articleList', function (page, feed) {
  
  var feedNum = feed['list'];

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
    MyAPI.getArticles(i, function (meta,articles) {
      populateList(articles, list, loadingSpinner, i);
    }); 

    return list[0];
  }

  var sportButton = $(page).find('#sportSelect');
  var categories = $(page).find('.sport');

  categories.addClass('hide');
  sportButton.on('click', function() {
    categories.toggleClass('hide');
  });

  $(page).find('#nba').clickable().on('click', function() {
    slideviewer.setPage(FEED_NBA); // TODO
    categories.toggleClass('hide');
  });

  $(page).find('#nfl').clickable().on('click', function() {
    slideviewer.setPage(FEED_NFL); // TODO
    categories.toggleClass('hide');
  });

  $(page).find('#mlb').clickable().on('click', function() {
    slideviewer.setPage(FEED_MLB); // TODO
    categories.toggleClass('hide');
  });

  $(page).find('#nhl').clickable().on('click', function() {
    slideviewer.setPage(FEED_NHL);
    categories.toggleClass('hide');
  });


  function populateList(data, sportList, spinner, sport) {
      var i = 0;
    spinner.remove();

    sportList.css('height','100%');

    sportList.scrollable();

    data.forEach(function (item) {

        i++;
        if (i >= 10) {
          return;
        }
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

        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        var passingData1 = {'object': item, 'list': sport};
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

        sportList.append(section);

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
  App.load('articleList', {list: FEED_NBA});
}
