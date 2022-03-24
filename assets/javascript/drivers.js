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

			getAll(curDriversRank);
		});
};


function getAll(driverRank) {
	var topAll = driverRank;
    for (var i = 0; i < topAll.length; i++) {
        $("#Driver"+(i+1).toString()+"Img").attr("src", topAll[i].image);
        $("#Driver"+(i+1).toString()+"Img").attr("alt", "Driver Image");
        $("#Driver"+(i+1).toString()+"Img").attr("class", "bg-white");
        $("#Driver"+(i+1).toString()+"Name").html(`#${i+1} ${topAll[i].name}`);
        $("#Driver"+(i+1).toString()+"Points").html(`${topAll[i].points} points`);
        $("#Driver"+(i+1).toString()+"Team").html(topAll[i].team);

    };
};
getForumlaDriversRankings();
