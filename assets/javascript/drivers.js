var curDriversRank = [];

function getForumlaDriversRankings() {
	curDriversRank = JSON.parse(localStorage.getItem("Drivers"));

	getAll(curDriversRank);

	//printDrivers(curDriversRank);
}

function getAll(driverRank) {
	var topAll = driverRank;
	for (var i = 0; i < topAll.length; i++) {
		$("#Driver" + (i + 1).toString() + "Img").attr("src", topAll[i].image);
		$("#Driver" + (i + 1).toString() + "Img").attr("alt", "Driver Image");
		$("#Driver" + (i + 1).toString() + "Img").attr("class", "bg-white");
		$("#Driver" + (i + 1).toString() + "Name").html(
			`#${i + 1} ${topAll[i].name}`
		);

		if (topAll[i].points != null) {
			$("#Driver" + (i + 1).toString() + "Points").html(
				`${topAll[i].points} points`
			);
		} else {
			$("#Driver" + (i + 1).toString() + "Points").html(
				`0 point`
			);
		}
		$("#Driver" + (i + 1).toString() + "Team").html(topAll[i].team);
	}
}

$(document).ready(function () {
	getForumlaDriversRankings();
});


// function printDrivers(driverRank) {
// 	var runs = 0;
// 	var topAll = driverRank;

// 	// Creates the Row
// 	var mainRow = $("<div>");
// 	mainRow.attr("class", "row");
// 	for (var i = 0; i < topAll.length; i++) {
// 		if (runs === 2) {
// 			$("main").append(mainRow);
// 			runs = 0;
// 		};

// 		// Creates the section with a Col
// 		var raceSection = $("<section>");
// 		raceSection.attr("class", "col-12");

// 		var row1 = $("<div>");
// 		row1.attr("class", "row");
// 		raceSection.append(row1);

// 		var col1 = $("<div>");
// 		col1.attr("class", "col-xs-5 col-md-6");
// 		row1.append(col1);

// 		var row2 = $("<div>");
// 		row2.attr("class", "team_featured_tile row");

// 		// Add the Driver Image
// 		var col2 = $("<div>");
// 		col2.attr("class", "team_img col-4");
// 		col1.append(col2);

// 		var img1 = $("<img>");
// 		img1.attr("id", `Driver${i + 1}Img`);
// 		$("#Driver" + (i + 1).toString() + "Img").attr("src", topAll[i].image);
// 		$("#Driver" + (i + 1).toString() + "Img").attr("alt", "Driver Image");
// 		$("#Driver" + (i + 1).toString() + "Img").attr("class", "bg-white");
// 		col2.append(img1);

// 		// Creates the Text Column for the Driver
// 		var col3 = $("<div>");
// 		col3.attr("class", "textcolumn col-8");
// 		col2.append(col3);

// 		// Add the Driver Name
// 		var col4 = $("<div>");
// 		col4.attr("class", "team_title col-12");
// 		col4.attr("id", `Driver${i + 1}Name`);
// 		$("#Driver" + (i + 1).toString() + "Name").html(`#${i + 1} ${topAll[i].name}`);
// 		col3.append(col4);

// 		// Add the Driver Points
// 		var col5 = $("<div>");
// 		col5.attr("class", "team_title col-12");
// 		col5.attr("id", `Driver${i + 1}Points`);
// 		col3.append(col5);

// 		// Add the Drivers Team
// 		var col6 = $("<div>");
// 		col6.attr("class", "team_newstitle col-12");
// 		col6.attr("id", `Driver${i + 1}Team`);
// 		col3.append(col6);

// 		// Checks if the score is 0 to display 0 and not null
// 		if (topAll[i].points != null) {
// 			$("#Driver" + (i + 1).toString() + "Points").html(`${topAll[i].points} points`);
// 		} else {
// 			$("#Driver" + (i + 1).toString() + "Points").html(`0 point`);
// 		}
// 		$("#Driver" + (i + 1).toString() + "Team").html(topAll[i].team);

// 		mainRow.append(raceSection);
// 		runs++;
// 	}
// }

