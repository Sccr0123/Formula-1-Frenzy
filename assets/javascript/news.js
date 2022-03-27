var news = [];

function getNews() {
  news = JSON.parse(localStorage.getItem("News"));
  displayNews(news);
}

function displayNews(news) {
  for (i = 0; i < 13; i++) {
    title = news[i].title;
    summary = news[i].summary;
    link = news[i].link;
    photo = news[i].media;
    shortUrl = news[i].clean_url;

    titleEl = document.querySelector("#title" + [i]);
    summaryEl = document.querySelector("#summary" + [i]);
    linkEl = document.querySelector("#link" + [i]);
    photoEl = document.querySelector("#photo" + [i]);

    titleEl.textContent = title;
    linkEl.href = link;

    if (!photo) {
      photoEl.src = "assets/images/placeholder.jpeg";
    } else {
      photoEl.src = photo;
    }

    if (!summary) {
      summaryEl.textContent = "Click the headline to view on " + shortUrl;
    } else {
      summaryEl.textContent = summary;
    }
  }
}

getNews();
