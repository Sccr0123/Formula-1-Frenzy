const apiKey = "27425ab90b3b573c3734673312a17aac";
const curSeason = 2022

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
			console.log(data);
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
			console.log(data);
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
			console.log(data);
		});
};

getForumlaOneRaces();
getForumlaDriversRankings();
getForumlaConstructorsRankings();
