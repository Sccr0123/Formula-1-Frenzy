//Creating Global Constants
const apiKey = "27425ab90b3b573c3734673312a17aac";
const curSeason = 2022;

//Creating Global Variables
var curDate = dayjs().format("YYYY-MM-DD");
var curRaces = [];
var curConstructorsRank = [];
var curDriversRank = [];
var news = [];
var upcoming = [];

//Gets Race Info Including Free Practice, Quali, Name, and Track Image
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
						if (
							data.response[i].competition.name ===
							curRaces[x].circuit
						) {
							curTrack = x;
							break;
						}
						curTrack = -1;
					}
					if (curTrack === -1) {
						tempRank.circuit = data.response[i].competition.name;
						switch (String(data.response[i].type)) {
							case "Race":
								tempRank.race = data.response[i].date;
								tempRank.image = data.response[i].circuit.image;
								break;
							case "1st Qualifying":
								tempRank.quali = data.response[i].date;
								break;
							case "3rd Practice":
								tempRank.fp3 = data.response[i].date;
								break;
							case "2nd Practice":
								tempRank.fp2 = data.response[i].date;
								break;
							case "1st Practice":
								tempRank.fp1 = data.response[i].date;
								break;
						}
						if (data.response[i].status != "Cancelled") {
							curRaces.push(tempRank);
						}
					} else {
						switch (String(data.response[i].type)) {
							case "Race":
								curRaces[curTrack].race = data.response[i].date;
								curRaces[curTrack].image =
									data.response[i].circuit.image;
								break;
							case "1st Qualifying":
								curRaces[curTrack].quali =
									data.response[i].date;
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
						}
					}
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
					}
					curRaces.push(tempRank);
				}
			}

			getUpcoming();
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
			localStorage.setItem("Drivers", JSON.stringify(curDriversRank));

			getTopFour();
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
			localStorage.setItem(
				"Constructors",
				JSON.stringify(curConstructorsRank)
			);

			// console.log(curConstructorsRank);
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

function getUpcoming() {
	for (var i = 0; i < curRaces.length; i++) {
		if (moment(curRaces[i].race).isSameOrAfter(curDate)) {
			if (upcoming.length < 5) {
				upcoming.push(curRaces[i]);
			} else {
				break;
			};
		};
	};
	
	upcoming.shift();

	//Upcoming 1
	$("#Upcoming1Img").attr("src", upcoming[0].image);
	$("#Upcoming1Img").attr("alt", "Track Image");
	$("#Upcoming1Img").attr("class", "bg-white");
	$("#Upcoming1Name").html(upcoming[0].circuit);
	$("#Upcoming1Date").attr("class", "fa fa-bolt");
	$("#Upcoming1Date").html(
		" " +
			dayjs(upcoming[0].fp1).format("MMMM DD") +
			" - " +
			dayjs(upcoming[0].race).format("DD")
	);

	//Upcoming 2
	$("#Upcoming2Img").attr("src", upcoming[1].image);
	$("#Upcoming2Img").attr("alt", "Track Image");
	$("#Upcoming2Img").attr("class", "bg-white");
	$("#Upcoming2Name").html(upcoming[1].circuit);
	$("#Upcoming2Date").attr("class", "fa fa-bolt");
	$("#Upcoming2Date").html(
		" " +
			dayjs(upcoming[1].fp1).format("MMMM DD") +
			" - " +
			dayjs(upcoming[1].race).format("DD")
	);

	//Upcoming 3
	$("#Upcoming3Img").attr("src", upcoming[2].image);
	$("#Upcoming3Img").attr("alt", "Track Image");
	$("#Upcoming3Img").attr("class", "bg-white");
	$("#Upcoming3Name").html(upcoming[2].circuit);
	$("#Upcoming3Date").attr("class", "fa fa-bolt");
	$("#Upcoming3Date").html(
		" " +
			dayjs(upcoming[2].fp1).format("MMMM DD") +
			" - " +
			dayjs(upcoming[2].race).format("DD")
	);

	//Upcoming 4
	$("#Upcoming4Img").attr("src", upcoming[3].image);
	$("#Upcoming4Img").attr("alt", "Track Image");
	$("#Upcoming4Img").attr("class", "bg-white");
	$("#Upcoming4Name").html(upcoming[3].circuit);
	$("#Upcoming4Date").attr("class", "fa fa-bolt");
	$("#Upcoming4Date").html(
		" " +
			dayjs(upcoming[3].fp1).format("MMMM DD") +
			" - " +
			dayjs(upcoming[3].race).format("DD")
	);

	//Prints The Next Race Box
	getNext();
};

function getNext() {
	var nextRace = {};
	for (var i = 0; i < curRaces.length; i++) {
		if (moment(curRaces[i].race).isSameOrAfter(curDate)) {
			nextRace = curRaces[i];

			$("#GrandPrix").html(nextRace.circuit);

			$("#EventDate").html(
				dayjs(nextRace.fp1).format("MMMM DD") +
					" - " +
					dayjs(nextRace.race).format("DD")
			);

			$("#TrackImg").attr("src", nextRace.image);
			$("#TrackImg").attr("alt", "Track Image");

			$("#P1Day").html(dayjs(nextRace.fp1).format("ddd"));
			$("#P1Date").html(dayjs(nextRace.fp1).format("MMMM DD"));

			$("#P2Day").html(dayjs(nextRace.fp2).format("ddd"));
			$("#P2Date").html(dayjs(nextRace.fp2).format("MMMM DD"));

			$("#P3Day").html(dayjs(nextRace.fp3).format("ddd"));
			$("#P3Date").html(dayjs(nextRace.fp3).format("MMMM DD"));

			$("#QualiDay").html(dayjs(nextRace.quali).format("ddd"));
			$("#QualiDate").html(dayjs(nextRace.quali).format("MMMM DD"));

			$("#RaceDay").html(dayjs(nextRace.race).format("ddd"));
			$("#RaceDate").html(dayjs(nextRace.race).format("MMMM DD"));
			break;
		};
	};
};

function getTopFour() {
	var topFour = curDriversRank;
	topFour.length = 4;

	//1st Place
	$("#Driver1Img").attr("src", topFour[0].image);
	$("#Driver1Img").attr("alt", "Driver Image");
	$("#Driver1Img").attr("class", "bg-white");
	$("#Driver1Name").html(`#1 ${topFour[0].name}`);
	$("#Driver1Points").html(`${topFour[0].points} points`);
	$("#Driver1Team").html(topFour[0].team);

	//2nd Place
	$("#Driver2Img").attr("src", topFour[1].image);
	$("#Driver2Img").attr("alt", "Driver Image");
	$("#Driver2Img").attr("class", "bg-white");
	$("#Driver2Name").html(`#2 ${topFour[1].name}`);
	$("#Driver2Points").html(`${topFour[1].points} points`);
	$("#Driver2Team").html(topFour[1].team);

	//3rd Place
	$("#Driver3Img").attr("src", topFour[2].image);
	$("#Driver3Img").attr("alt", "Driver Image");
	$("#Driver3Img").attr("class", "bg-white");
	$("#Driver3Name").html(`#3 ${topFour[2].name}`);
	$("#Driver3Points").html(`${topFour[2].points} points`);
	$("#Driver3Team").html(topFour[2].team);

	//4th Place
	$("#Driver4Img").attr("src", topFour[3].image);
	$("#Driver4Img").attr("alt", "Driver Image");
	$("#Driver4Img").attr("class", "bg-white");
	$("#Driver4Name").html(`#4 ${topFour[3].name}`);
	$("#Driver4Points").html(`${topFour[3].points} points`);
	$("#Driver4Team").html(topFour[3].team);
}

$(document).ready(function () {
	getForumlaOneRaces();
	getForumlaDriversRankings();
	getForumlaConstructorsRankings();
	getNews();
});
