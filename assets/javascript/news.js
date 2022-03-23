// Search options
// %22formula%201%22
// f1

var news = [];

function getNews() {
  news = JSON.parse(localStorage.getItem("News"));
  console.log(news);
  displayNews(news);
}

// $(".news-article").each(function () {
//   $("#news" + articleNumber).val(localStorage.getItem("News" + [0]));
// });

function displayNews(news) {
  for (i = 0; i < 3; i++) {
    title = news[i].title;
    summary = news[i].summary;
    link = news[i].link;
    photo = news[i].media;

    titleEl = document.querySelector("#title" + [i]);
    summaryEl = document.querySelector("#summary" + [i]);
    linkEl = document.querySelector("#link" + [i]);
    photoEl = document.querySelector("#photo" + [i]);

    titleEl.textContent = title;
    summaryEl.textContent = summary;
    linkEl.textContent = link;
    photoEl.src = photo;
  }
}

getNews();
