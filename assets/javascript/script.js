const apiKey = "27425ab90b3b573c3734673312a17aac";
const curSeason = 2022;

var curRaces = [];
var curConstructorsRank = [];
var curDriversRank = [];
var news = [];

//Shows Races Only (Subject To Change)
function getForumlaOneRaces() {
	fetch(`https://v1.formula-1.api-sports.io/races?season=${curSeason}`, {
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
			var curTrack = 0;
			for (var i = 0; i < data.response.length; i++) {
				var tempRank = {
					circuit: "",
					fp1: "",
					fp2: "",
					fp3: "",
					quali: "",
					race: "",
					image: "",
				};

				if (curRaces.length != 0) {
					for (var x = 0; x < curRaces.length; x++) {
						if (data.response[i].competition.name === curRaces[x].circuit) {
							curTrack = x;
							break;
						};
						curTrack = -1;
					};
					if (curTrack === -1) {
						tempRank.circuit = data.response[i].competition.name;
						switch (String(data.response[i].type)) {
							case "Race":
								tempRank.race = data.response[i].date;
								tempRank.image = data.response[i].circuit.image;
								break;
							case "1st Qualifying":
								tempRank.quali = "Added";
								break;
							case "3rd Practice":
								tempRank.fp3 = "Added";
								break;
							case "2nd Practice":
								tempRank.fp2 = "Added";
								break;
							case "1st Practice":
								tempRank.fp1 = "Added";
								break;
						};
						if (data.response[i].status != "Cancelled") {
							curRaces.push(tempRank);
						};

					} else {
						switch (String(data.response[i].type)) {
							case "Race":
								curRaces[curTrack].race = data.response[i].date;
								curRaces[curTrack].image = data.response[i].circuit.image;
								break;
							case "1st Qualifying":
								curRaces[curTrack].quali = data.response[i].date;
								break;
							case "3rd Practice":
								curRaces[curTrack].fp3 = data.response[i].date;
								break;
							case "2nd Practice":
								curRaces[curTrack].fp2 = data.response[i].date;
								break;
							case "1st Practice":
								curRaces[curTrack].fp1 = data.response[i].date;
								break;
						};
					};
		
				} else {
					tempRank.circuit = data.response[i].competition.name;
					switch (String(data.response[i].type)) {
						case "Race":
							tempRank.race = data.response[i].date;
							tempRank.image = data.response[i].circuit.image;
							break;
						case "1st Qualifying":
							tempRank.race = data.response[i].date;
							break;
						case "3rd Practice":
							tempRank.race = data.response[i].date;
							break;
						case "2nd Practice":
							tempRank.race = data.response[i].date;
							break;
						case "1st Practice":
							tempRank.race = data.response[i].date;
							break;
						default:
							console.log("Default");
					}
					curRaces.push(tempRank);
				}
			}
			console.log(curRaces);
		});
}

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
			for (var i = 0; i < data.response.length; i++) {
				//Creates Temp Opject For Teams
				var tempRank = {
					name: "",
					points: "",
					image: "",
					team: "",
				};

				//Takes Data And Adds It To curConstructorsRank
				tempRank.name = data.response[i].driver.name;
				tempRank.points = data.response[i].points;
				tempRank.image = data.response[i].driver.image;
				tempRank.team = data.response[i].team.name;
				curDriversRank.push(tempRank);
			}
			console.log(curDriversRank);
		});
}

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
			for (var i = 0; i < data.response.length; i++) {
				//Creates Temp Opject For Teams
				var tempRank = {
					name: "",
					points: "",
					logo: "",
				};

				//Takes Data And Adds It To curConstructorsRank
				tempRank.name = data.response[i].team.name;
				tempRank.points = data.response[i].points;
				tempRank.logo = data.response[i].team.logo;
				curConstructorsRank.push(tempRank);
			}
			console.log(curConstructorsRank);
		});
}

function getNews() {
	fetch(
		"https://free-news.p.rapidapi.com/v1/search?q=%22formula%201%22&lang=en",
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "free-news.p.rapidapi.com",
				"x-rapidapi-key":
					"8de0284a1cmsh07a10a500bcd8fep183aa6jsn9849ab29551e",
			},
		}
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			//console logs all articles
			news = data.articles;
			storeNews();
		});
}
function storeNews() {
	localStorage.setItem("News", JSON.stringify(news));
}

getForumlaOneRaces();
getForumlaDriversRankings();
getForumlaConstructorsRankings();
getNews();

// switch (data.response[i].type) {
// 								case "Race":
// 									curRaces[x].race = "Added";
// 								case "1st Qualifying":
// 									curRaces[x].quali = "Added";
// 								case "3rd Practice":
// 									curRaces[x].fp3 = "Added";
// 								case "2nd Practice":
// 									curRaces[x].fp2 = "Added";
// 								case "1st Practice":
// 									curRaces[x].fp1 = "Added";
// 							}
// 						} else {
// 							tempRank.circuit = data.response[i].competition.name;
// 							switch (data.response[i].type) {
// 								case "Race":
// 									tempRank.race = data.response[i].date;
// 								case "1st Qualifying":
// 									tempRank.quali = "Added";
// 								case "3rd Practice":
// 									tempRank.fp3 = "Added";
// 								case "2nd Practice":
// 									tempRank.fp2 = "Added";
// 								case "1st Practice":
// 									tempRank.fp1 = "Added";
// 							}
// 							console.log(tempRank);
// 							//curRaces.push(tempRank);
// 						}
// 					}