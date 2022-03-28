var curDriversRank = [];

function getForumlaDriversRankings() {
	curDriversRank = JSON.parse(localStorage.getItem("Drivers"));

	printDrivers(curDriversRank);
};

function printDrivers(driverRank) {
	var runs = 0;
	var topAll = driverRank;

	// Creates the Row
	var mainRow = $("<div>");
	mainRow.attr("class", "row");
	mainRow.attr("id", "news_body_feature");

	for (var i = 0; i < topAll.length; i++) {
		if (topAll[i].points === null) {
			topAll[i].points = 0;
		};

		if (runs === 2) {
			$("main").append(mainRow);
			runs = 0;
		};

		var col1 = $("<div>");
		col1.attr("class", "col-xs-5 col-md-6");

		var driverSection = $("<div>");
		driverSection.attr("class", "team_featured_tile row");

		var imgSection = $("<div>");
		imgSection.attr("class", "team_img col-4");

		var driverImg = $("<img>");
		driverImg.attr("src", topAll[i].image);

		imgSection.append(driverImg);

		var textSection = $("<div>");
		textSection.attr("class", "textcolumn col-8");

		var driverName = $("<div>");
		driverName.attr("class", "team_title col-12");
		driverName.text(`#${i+1} ${topAll[i].name}`);

		var driverPoints = $("<div>");
		driverPoints.attr("class", "team_title col-12");
		driverPoints.text(`${topAll[i].points} Points`);

		var driverTeam = $("<div>");
		driverTeam.attr("class", "team_newstitle col-12");
		driverTeam.text(topAll[i].team);

		textSection.append(driverName, driverPoints, driverTeam);

		driverSection.append(imgSection, textSection);

		col1.append(driverSection);

		mainRow.append(col1);

		runs++;
	};
};

$(document).ready(function () {
	getForumlaDriversRankings();
});