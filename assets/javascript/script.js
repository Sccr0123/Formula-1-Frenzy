const apiKey = "27425ab90b3b573c3734673312a17aac";
const curSeason = 2022

var curRaces = [];
var curConstructorsRank = [];
var curDriversRank = [];


//Shows Races Only (Subject To Change)
function getForumlaOneRaces() {
	fetch(
		`https://v1.formula-1.api-sports.io/races?season=${curSeason}&type=Race`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "https://v1.formula-1.api-sports.io",
				"x-rapidapi-key": apiKey,
			},
		}
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			curRaces = data.response;
			console.log(curRaces);
		});
};

function getForumlaDriversRankings() {
	fetch(
		`https://v1.formula-1.api-sports.io/rankings/drivers?season=${curSeason}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "https://v1.formula-1.api-sports.io",
				"x-rapidapi-key": apiKey,
			},
		}
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			curDriversRank = data.response;
			console.log(curDriversRank);
		});
};

function getForumlaConstructorsRankings() {
	fetch(
		`https://v1.formula-1.api-sports.io/rankings/teams?season=${curSeason}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "https://v1.formula-1.api-sports.io",
				"x-rapidapi-key": apiKey,
			},
		}
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			curConstructorsRank = data.response;
			console.log(curConstructorsRank);
		});
};

getForumlaOneRaces();
getForumlaDriversRankings();
getForumlaConstructorsRankings();
