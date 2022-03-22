const apiKey = "27425ab90b3b573c3734673312a17aac";
const curSeason = 2022;

var curRaces = [];
var curConstructorsRank = [];
var curDriversRank = [];
var news = [];

//Shows Races Only (Subject To Change)
function getForumlaOneRaces() {
  fetch(`https://v1.formula-1.api-sports.io/races?season=${curSeason}&type=Race`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "https://v1.formula-1.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      curRaces = data.response;
      console.log(curRaces);
    });
}

function getForumlaDriversRankings() {
  fetch(`https://v1.formula-1.api-sports.io/rankings/drivers?season=${curSeason}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "https://v1.formula-1.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      curDriversRank = data.response;
      console.log(curDriversRank);
    });
}

function getForumlaConstructorsRankings() {
  fetch(`https://v1.formula-1.api-sports.io/rankings/teams?season=${curSeason}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "https://v1.formula-1.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      curConstructorsRank = data.response;
      console.log(curConstructorsRank);
    });
}

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
      //console logs all articles
      news = data.articles;
      storeNews();
      displayNews(news);
    });
}
function storeNews() {
  localStorage.setItem("News", JSON.stringify(news));
}

function displayNews(news) {
  console.log(news);
  var newsTitle1El = document.querySelector("#newsarticle1");
  var newsTitle2El = document.querySelector("#newsarticle2");
  var newsTitle3El = document.querySelector("#newsarticle3");
  var newsTitle4El = document.querySelector("#newsarticle4");

  newsTitle1El.textContent = news[0].title;
  newsTitle2El.textContent = news[1].title;
  newsTitle3El.textContent = news[2].title;
  newsTitle4El.textContent = news[4].title;
}

getForumlaOneRaces();
getForumlaDriversRankings();
getForumlaConstructorsRankings();
getNews();
