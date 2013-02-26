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
        var imgLink = item['media:content']['@']['url'];

        var section = $('<div />').addClass('app-section');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var summary = $('<div />').html(artSum);
        var button = $('<div />').addClass('app-button');
        var kikbutton = $('<div />').addClass('app-button');

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
          cards.kik.send({
            title: artTitle,
            text: 'Check out what I found!',
            pic: imgLink,
            big: false,
          });
        });
    });
  }
});
      try {
        App.restore();
      }
      catch (err) {
        App.load('articleList');
      }
