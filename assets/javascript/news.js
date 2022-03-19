// Search options
// %22formula%201%22
// f1

var news = [];

// function getNews() {
//   fetch("https://free-news.p.rapidapi.com/v1/search?q=%22formula%201%22&lang=en", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "free-news.p.rapidapi.com",
//       "x-rapidapi-key": "8de0284a1cmsh07a10a500bcd8fep183aa6jsn9849ab29551e",
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //console logs all articles
//       newsObj = data.articles;
//       storeNews();
//     });

// }
// function storeNews() {
//   localStorage.setItem("moreNews", JSON.stringify(newsObj));
//   console.log(localStorage);
// };
// getNews();

function getNews() {
  news = JSON.parse(localStorage.getItem("News"));
  console.log(news);
};

getNews();