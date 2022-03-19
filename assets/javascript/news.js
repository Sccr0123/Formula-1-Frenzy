// Search options
// %22formula%201%22
// f1

var news = [];

function getNews() {
  news = JSON.parse(localStorage.getItem("News"));
  console.log(news);
};

getNews();