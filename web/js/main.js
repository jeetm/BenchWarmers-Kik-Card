App.populator('articleList', function (page) {
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

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button');

        $(page).find('.app-content').append(section);
        section.append(description);
        section.append(button);
        description.append(title);
        description.append(summary);
        
        title.text(artTitle);
        button.text('Read More');

        button.on('click', function() {
          window.location = artLink;
        });
    });
  }
});


      App.populator('articleView', function (page, title, link) {
        // put stuff here
        var backButton = $(page).find('#backButton').on('click', function() {
          App.load('articleList');
        });
        var kikbutton = $(page).find('#kik').on('click', function() {
          cards.kik.send({
            title: article.title,
            text: article.brief,
            big: false,
          });
        });
      });

      try {
        App.restore();
      }
      catch (err) {
        App.load('articleList');
      }
