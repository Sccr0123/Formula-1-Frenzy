var curDriversRank = [];

function getForumlaDriversRankings() {
	curDriversRank = JSON.parse(localStorage.getItem("Drivers"));

	getAll(curDriversRank);
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
		}
		else {
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
