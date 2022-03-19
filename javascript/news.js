// Search options
// %22formula%201%22
// f1

function getNews() {
  fetch("https://free-news.p.rapidapi.com/v1/search?q=%22formula%201%22&lang=en", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-news.p.rapidapi.com",
      "x-rapidapi-key": "8de0284a1cmsh07a10a500bcd8fep183aa6jsn9849ab29551e",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //shows only the title, date, and link for each article
      for (i = 0; i < data.articles.length; i++) {
        console.log(data.articles[i].title + "\n" + data.articles[i].published_date + "\n" + data.articles[i].link);
      }
      //console logs all articles
      console.log(data.articles);
      var newsObj = data.articles;
      console.log(newsObj);
      var newsObjStorage = JSON.stringify(newsObj);
      localStorage.setItem("moreNews", newsObjStorage);
      console.log(localStorage);
    });
}

getNews();
