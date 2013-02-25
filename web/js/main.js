App.populator('articleList', function (page) {
  MyAPI.getArticles(function (meta, articles) {
    logStuff(articles);
  });
        
       /* 
        var articleData = [];
        var articleList = $(page).find(".app-content");
        var articleTemplate = $(page).find("#articleTemplate").remove();

        articleData.forEach(function(article){


          var tempArticle = articleTemplate.clone();

          tempArticle.find(".title").text("");

          articleList.append(tempArticle);

*/
  function logStuff(data) {


    console.log(data);
    for (var i = 0; i < data.length; i++)
    {
        var artTitle = data[i]['title'];
        var artBrief = data[i]['summary'];
        var artDate = data[i]['pubDate'];
        var artLink = data[i]['link'];
        if (data[i]['media:content']) {
          var imgsrc =  data[i]['media:content']['@']['url'];
        }
        else {
          imgsrc = "http://www.sportelmonaco.com/sportel/resources/partners/nba_medium.jpg";
        }
        var section = $('<div />').addClass('app-section');

        var image  = $('<div />').addClass('image');
        var pic = $('<img />');
        var description = $('<div />').addClass('description');
        var title = $('<h4 />');
        var foobar = $('<div />').html(artBrief);
        var summary = foobar.find('p').text() || artBrief;

        summary = summary.slice(0,175) + "...";

        title.text(artTitle);
        pic.attr('src', imgsrc);
        var story = $('<p />');
        var button = $('<div />').addClass('app-button');

        $(page).find('.app-content').append(section);
        section.append(image);
        image.append(pic);
        section.append(description);
        description.append(title);
        description.append(summary);
        //button.append(section);
        // description.append(title);
        // description.append(story);

        // story.text(artLink);
        //button.text('Read More');

  var button1 = $(page).find('#button1').click(function(){
        App.load('articleView', data[i]);
      });
  var button2 = $(page).find('#button2').click(function(){
        App.load('articleView', articleData[1]);
      });
  var button3 = $(page).find('#button3').click(function(){
        App.load('articleView', articleData[2]);
      });
  var button4 = $(page).find('#button4').click(function(){
        App.load('articleView', articleData[3]);
      });
  var button5 = $(page).find('#button5').click(function(){
        App.load('articleView', articleData[4]);
      });
  var button6 = $(page).find('#button6').click(function(){
        App.load('articleView', articleData[5]);
      });
  var button7 = $(page).find('#button7').click(function(){
        App.load('articleView', articleData[6]);
      });
    }
  }
});
/*
var articleData = [
      {
        title: 'Streaking Grizzlies take bite out of Raptors',
        brief: 'The Memphis Grizzlies, playing against Rudy Gay for the first time since trading their top scorer to Toronto, scored an 88-82 victory over the Raptors on Wednesday ...',
        description: 'The Memphis Grizzlies, playing against Rudy Gay for the first time since trading their top scorer to Toronto, scored an 88-82 victory over the Raptors on Wednesday.<br><br>The Grizzlies (35-18) limited Gay to 13 points, one of his lowest outings since joining Toronto last month, en route to a fifth straight victory that strengthens their bid for homecourt advantage in the playoffs. It was a battle by both teams and eventually it became a game down to the wire, Memphis head coach Lionel Hollins told reporters. We made a lot of plays, got stops, got big rebounds, made plays at the offensive end and also made just enough free throws.<br><br> Zach Randolph had a team-high 17 points for the Grizzlies, who tightened their grip on fourth place in the NBAs Western Conference and improved on the franchises best start to a season through 53 games. Memphis took a nine-point lead into the final quarter and then had to withstand a fourth-quarter rally by the Raptors (22-33) that was not enough to give the home side their first six-game winning streak since 2009. Alan Anderson came off the Toronto bench to score a game-high 19 points, including four three-pointers during the final quarter as the Raptors tied the game with about four minutes left in regulation. <br><br>But the Grizzlies prevailed in the end, due in large part to their ability to shut down Gay, who entered the game averaging 21.1 points a game since joining the Raptors. Gay made just five-of-15 attempts, collected a team-high nine rebounds and had a game-high five turnovers.<br><br>They are not chopped liver defensively, Raptors head coach Dwane Casey told reporters after his team were limited to 36.6 percent shooting in the loss. (Gay) was going to have to work for his shots. Mentally, we have to be ready for that type of fight at the beginning of the game so we get that rhythm early.',
      },
      {
        title: 'Rockets land Robinson in six-player deal with the Kings',
        brief: "The Houston Rockets launched into action ahead of the NBA trade deadline by swinging a six-player deal with the Sacramento Kings that sent them last year's number five draft pick Thomas Robinson ...",
        description: "The Houston Rockets launched into action ahead of the NBA trade deadline by swinging a six-player deal with the Sacramento Kings that sent them last year's number five draft pick Thomas Robinson.<br><br> Houston, holding the eighth and last Western Conference playoff spot at 30-26, also received forwards Francisco Garcia and Tyler Honeycutt from Sacramento in return for forward Patrick Patterson, center Cole Aldrich and guard Toney Douglas in a trade on Wednesday night. The deal caught Houston players off guard as they were preparing to host last year's conference champion Oklahoma City Thunder. Patterson, Aldrich and Douglas left the arena just as the game got underway.<br><br> 'It was definitely the weirdest game I've ever played in,' said Houston forward Chandler Parsons. 'It was hard to focus.' The short-handed Rockets rallied from 14 points down to beat the Thunder 122-119 as former Oklahoma City guard James Harden poured in a career-high 46 points.Houston took a gamble on the potential of Robinson, who so far had been a disappointment with the Kings (19-36). The 6-foot-10 Robinson was averaging only 4.8 points and 4.7 rebounds in 16 minutes per game.<br><br> Patterson was the biggest piece given up by Houston. He had started 38 games this season and was the Houston's fourth-leading scorer, averaging 11.6 points.The NBA trade deadline is 3 p.m. ET on Thursday.",
      },
      {
        title: 'Los Angeles Lakers owner Jerry Buss dies at 80',
        brief: "Jerry Buss, who parlayed a $1,000 real estate investment into ownership of the Los Angeles Lakers, winning 10 National Basketball Association championships and making the team one of the most glamorous in American sports, died on Monday at 80 ...",
        description: "Jerry Buss, who parlayed a $1,000 real estate investment into ownership of the Los Angeles Lakers and won 10 National Basketball Association championships, has died at 80, the NBA said on its official website on Monday.Buss had been hospitalized and treated for cancer but the immediate cause of death was kidney failure, according to his assistant, Bob Steiner, who was cited in the NBA post.<br><br> Buss bought the Lakers in 1979 and under his ownership the team became one of the most valuable and popular franchises in professional sports.The Lakers won league championships during their 'Showtime' era in 1980s and early '90s with teams that feature some of the sports' marquee names, including Kareem Abdul-Jabbar and Magic Johnson.<br><br> The team had more dominant years in the late 1990s through 2004 with superstars Kobe Bryant and Shaquille O'Neal.'The brand of basketball that he brought here with Showtime and the impact that he had on the sport as a whole - those vibrations were felt (by) a kid all the way to Italy at 6 years old before basketball was even global,' said Bryant, who was raised in Italy.<br><br> Two of Buss' adult children are executive vice presidents of the franchise - Jeanie Buss manages the business and Jim Buss oversees basketball operations. 'This is a sad day for Los Angeles,'' former mayor Richard Riordan tweeted.",
      },
      {
        title: 'Yao still involved in basketball, just not on the court',
        brief: "Yao Ming looks like he could still tangle with Dwight Howard under the basket but the former National Basketball Association number one draft pick clearly has put his playing days in the rear-view mirror ...",
        description: "Yao Ming looks like he could still tangle with Dwight Howard under the basket but the former National Basketball Association number one draft pick clearly has put his playing days in the rear-view mirror.<br><br>The eight-time Houston Rockets All-Star left the game following the 2010-11 season after the final five years of his career were filled with injuries, most notably to his foot and ankle.'I'm not going to try to come back, I'm not Grant Hill,' he told Reuters with a laugh, referring to the 40-year-old Los Angeles Clippers forward who has returned to the court following a series of career-threatening injuries.'He's unique. He keeps coming back no matter how many surgeries he's had.'<br><br> Yao, 32, was a judge for the NBA Slam Dunk Contest on Saturday in the run-up to Sunday's All-Star game, returning to the city where he played since being selected as the number one overall pick in the 2002 NBA Draft.A 7-foot-6 center with soft hands, Yao still works with the NBA, promoting the game in his native China, and owns a team in the Chinese Basketball Association. But he is also involved with his foundation, which helps needy children in the western part of China.<br><br>The third Chinese to play in the NBA, he is also back in college to complete his degree and lives in Shanghai.Without the injuries that derailed his career, Yao might have ultimately landed a spot in the Basketball Hall of Fame. He was not crushed, however, when he left the game.'If you look at the timeline, I didn't have a career-ending injury,' said Yao. 'I had multiple injuries. The end of my career was something I prepared for. Obviously I still wanted to play but I knew I had to let it go. You know that it's going to end. <br><br>'Yao, who could still make the Hall of Fame as a contributor, believes there are several players in China that could have a shot at an NBA career.'There are a few young athletes that are pretty talented,' he said. 'I think they have the potential to play in the NBA in the future. It all depends on how they develop.<br><br>'Yao, who averaged 25 points a game during the 2006-07 season, said he plays basketball 'just a little bit' these days.'Nothing more than HORSE,' a smiling Yao said of the non-contact game, played mostly by children, that involves just shooting.",
      },
      {
        title: "The All-Star game is made-to-order for Clippers' Paul",
        brief: "For a point guard like Chris Paul, the NBA All-Star game is made to order. Everywhere he looks is someone who can put the ball in the basket. If he searches underneath, there is Blake Griffin ...",
        description: "For a point guard like Chris Paul, the NBA All-Star game is made to order. Everywhere he looks is someone who can put the ball in the basket. If he searches underneath, there is Blake Griffin. Out on the wing is Kevin Durant. And if Durant is taking a breather, Paul is gazing at Kobe Bryant.<br><br> 'You just want to play fast,' Paul said after carving up the East with 20 points and 15 assists to win the Most Valuable Player Award in the annual All-Star game on Sunday. 'I like to throw the lob. I like to see guys hit threes. When we're out on the court with all that fire power, why wouldn't you want to make passes? 'You've got KD (Durant) filling one of the lanes, you've got Blake, Kobe on the wing. There's nothing like it.'<br><br> Paul led the Western Conference to a 143-138 victory, hitting seven-of-10 shots from the floor to complement his pass-first game that had the East playing catch-up all night. LeBron James, the high-scoring Miami forward who bagged 19 points in a losing effort, called Paul's performance 'unbelievable'. 'He's one of the best players we have in this league,' offered James.<br><br> 'The number one point guard. It doesn't surprise me what he did.' Dwyane Wade echoed James's sentiments on Paul, the diminutive Los Angeles Clippers guard whose per-game average of 9.6 assists ranks second in the NBA this season. 'He controlled the All‑Star Game,' Wade said of Paul. 'He slowed it up and he controlled it coming down the stretch. Look at the Clippers. He missed a lot of time and they started to struggle a little bit.But when he's on the floor, they're obviously one of the best teams in the NBA. With guys like LeBron and KD, who fill up the stat sheets, he gets overlooked. But not to us players.<br><br>'Durant scored 30 points for the West, hitting 13-of-24 shots, but was quick to say Paul deserved the MVP award.'He had great passes, making steals, made big buckets,' said the Oklahoma City forward and leading scorer in the NBA.'He played a hell of a game and congratulations to him. It was a pleasure playing with him.' ",
      },
      {
        title: 'Durant leads West over East in All-Star game',
        brief: "Kevin Durant and Blake Griffin provided a potent mix of outside shooting and inside dominance to lift the Western Conference to a 143-138 victory over the Eastern Conference in the NBA All-Star game on Sunday ...",
        description: " Kevin Durant and Blake Griffin provided a potent mix of outside shooting and inside dominance to lift the Western Conference to a 143-138 victory over the Eastern Conference in the NBA All-Star game on Sunday.<br><br> Durant scored 30 points and Griffin added 19, on nine-of-11 shooting, but the Most Valuable Player Award went to Chris Paul, who scored 20 points and added 15 assists for the West. Paul told Durant, the NBA's leading scorer and last year's All-Star game MVP, to expect to see the ball in his hands.<br><br>'I told KD early in the first quarter, 'Man, if they score anything, you run. I'll get you the ball, you score. I want to be the one to give it to you,' recalled the Los Angeles Clippers guard. 'In games like this it's so up‑tempo and fast paced, a guy like me that's a facilitator, I enjoy it.' Carmelo Anthony of the New York Knicks paced the East with 26 points, followed by Miami guard Dwyane Wade, who had 21, and LeBron James, who added 19.<br><br> Durant hit 13-of-24 shots to lead the West to a third straight victory in the annual showcase that features little defense, a lot of dunks, and plenty of assists for anyone who decides to pass.'I'm just out there having fun,' Oklahoma City forward Durant said. 'I played a lot of street basketball. I played a lot of celebrity games. This is my type of ballgame, up and down.' <br><br>Los Angeles Lakers guard Kobe Bryant, a three-time MVP of the game, dueled James several times in the fourth quarter and came out on top. James nailed seven-of-18 shots but misfired on all four fourth-quarter attempts. James, a forward with the Miami Heat, said he was not startled to see the smaller Bryant guarding him with the game on the line. 'He does it all the time,'' James said. 'I am absolutely not surprised. It was all in good spirit. It was just two guys that love to compete, love to go at it. It was a lot of fun.'<br><br> The West held a three-point, fourth-quarter lead but a 25-foot, three-pointer by Paul, a driving lay-up by Bryant, and a dunk by Durant pushed the lead to 136-126 with 2:34 left. Anthony said at halftime with the West leading 69-65 his East team mates decided 'we were going to go after it'. 'Everybody competed,' he said. 'We get guys out there of that caliber, they're going to compete. Nobody likes to lose. 'At the end of the day, we're all basketball players, we're all competitors.'<br><br> The sell-out Toyota Center crowd of 16,101 roared its approval at the array of alley-oop baskets, sprints to the hoop, and the rim-rattling dunks by Griffin, Paul's team mate with the Clippers. West coach Gregg Popovich of the San Antonio Spurs praised both teams, saying: 'Those guys are the best in the world and they competed and worked hard.' 'They respected the game,' he said. 'They respected each other. Nobody got hurt. The fans had a great time. That's what it's all about.' ",
      },
      {
        title: 'Ross wins slam dunk title, Irving top long-range gunner',
        brief: "Toronto Raptors guard Terrence Ross won the NBA's Slam Dunk Contest on Saturday with a one-handed, though-the-legs rim-rattler after leaping over a ballboy ...",
        description: " Toronto Raptors guard Terrence Ross won the NBA's Slam Dunk Contest on Saturday with a one-handed, though-the-legs rim-rattler after leaping over a ballboy. The windmill slam earned the wild applause of the sold-out crowd at the Toyota Center and lifted the 22-year-old rookie to the title over Jeremy Evans of the Utah Jazz.<br><br> 'I feel blessed, but it's still overwhelming,' he told reporters. 'I'm just trying to soak it all in.' Ross garnered 58 percent of the votes from the public in the two-dunk championship round to claim the title. In another skills test, second-year guard Kyrie Irving of the Cleveland Cavaliers defeated San Antonio Spurs power forward Matt Bonner 23-20 to win the three-point shooting contest.<br><br> Ross said he never dreamed he would win the title.'It was my favorite event to watch every year, since I was a small child,' he said. 'But actually winning it, I never thought I'd do it. It's been unbelievable. I've had fun.' In the opening round of the finals, Evans leaped over a covered easel and delivered a left-handed windmill slam. After the dunk, he pulled the cover off the easel and revealed a picture of himself dunking the ball. He then signed the picture to the roar of the crowd.<br><br> But Ross clinched the competition with his gravity-defying leap over the ballboy, who also needed a leap of faith that he was not going to get clobbered.'I told him the day before that I was going to jump over him, but I never told him I was going to go through the legs,' said Ross. 'He was kind of nervous.' 'When I first grabbed him he said, 'You're not going to hit me, right?' I said, 'No, I'm not going to hit you.' So I had to calm his nerves.'<br><br> In the three-point contest, the 20-year-old Irving, who is also playing in Sunday's All-Star game, said he was using the occasion to become better known because the Cavaliers are generally out of the national spotlight. 'This weekend was just basically about earning everybody's respect and getting a chance to people to see me that don't usually see me,' he said. 'We're not nationally televised.' 'This weekend is to get everybody acclimated to my face.' ",
      },
      ];


*/

      App.populator('articleView', function (page, article) {
        // put stuff here
        $(page).find('#articleTitle').text(article['artTitle'].slice(0,16) + "..." );
        $(page).find('#desc').html(article.description);
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
