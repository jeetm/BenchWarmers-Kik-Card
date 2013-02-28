App.populator('articleListnba', function (page) {
  MyAPI.getArticles(function (meta, articles) {
    logStuff(articles);
  });

  function logStuff(data) {

    console.log(data);
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

        $(page).find('.app-content').append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(item);
          console.log(x);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });
        });
    });
  }

  var nbaBut = $(page).find('#nba').clickable();
  var nflBut = $(page).find('#nfl').clickable();
  var mlbBut = $(page).find('#mlb').clickable();
  var nhlBut = $(page).find('#nhl').clickable();
  var buttons = $(page).find('.category-button');
  var selectedButton = $(page).find('.selected-button');
  var buttonClicked;

  buttons.on('click', function() {
    var clickedButton = $(page).find('#' + $(this).attr('id'));
      console.log(clickedButton.attr('id'));
      selectedButton.removeClass('selected-button');
      selectedButton.addClass('other-buttons');
      clickedButton.addClass('selected-button');
      selectedButton = clickedButton;
      nbaBut.addClass('other-buttons');
      console.log('articleList' + clickedButton.attr('id'));
      App.load('articleList' + clickedButton.attr('id'), clickedButton);
  });
});

App.populator('articleListnfl', function(page, clickedButton) {
  MyAPI.getInfo(function (meta, articles) {
    loadPage(articles);

    function loadPage(data) {
        console.log(data);
      
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

        $(page).find('.app-content').append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(item);
          console.log(x);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });
        });
    });
  }
  });
});


App.populator('articleListmlb', function(page, clickedButton) {
  MyAPI.getData(function (meta, articles) {
    loadInfo(articles);

    function loadInfo(data) {
        console.log(data);
      
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

        $(page).find('.app-content').append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(item);
          console.log(x);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });
        });
    });
  }
  });
});

App.populator('articleListnhl', function(page, clickedButton) {
  MyAPI.getNhl(function (meta, articles) {
    init(articles);

    function init(data) {
        console.log(data);
      
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

        $(page).find('.app-content').append(section);
        section.append(description);
        section.append(button);
        section.append(kikbutton);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');
        kikbutton.text('Kik');

        button.clickable().on('click', function() {
          cards.browser.open(artLink);
        });

        kikbutton.clickable().on('click', function() {
          var x = JSON.stringify(item);
          console.log(x);
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
            linkData: x
          });
        });
    });
  }
  });
});

App.populator('articleView', function(page, linkData) {

  $(page).find('#articleTitle').text(linkData['title'].slice(0,14) + "...");
  $(page).find('#kikBut').text('Kik');
  $(page).find('#backBut').text('Back');

  $(page).find('#backBut').clickable().on('click', function() {
    App.load('articleListnba', 'slide-right');
  });

  $(page).find('#kikBut').clickable().on('click', function() {
    var imgLink = linkData['media:content']['@']['url'];
    var artTitle = linkData['title'];
    var x = JSON.stringify(linkData);
    cards.kik.send({
      title: artTitle,
      text: 'Check out what I found!',
      pic: imgLink,
      big: false,
      linkData: x
    });
  });

  var brief = $('<div />').html(linkData['description']);
  var summary = brief.text();
  var imagesrc = brief.find('img').attr('src');
  var image = $('<img />').attr('src', imagesrc);
  $(page).find('#artImage').html(image);
  $(page).find('#artBrief').text(summary);
  $(page).find('#readMore').text('Read More').on('click', function() {
    cards.browser.open(linkData['link']);
  });
});

if (cards.browser && cards.browser.linkData) {
  App.load('articleView', cards.browser.linkData);
}
else {
  App.load('articleListnba');
}
//Ideas: Setting max number of stories and dealing with old content messages, categorizing by sport, displaying time/date of article/source, styling
