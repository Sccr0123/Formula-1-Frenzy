var curRaces = [];

function pullRaces() {
    curRaces = JSON.parse(localStorage.getItem("Races"));
    
    console.log(curRaces);

	printRaces();
}

function printRaces() {
    var runs = 0;

    var mainRow = $("<div>");
    mainRow.attr("class", "row");

    for (var i = 0; i < curRaces.length; i++) {

        if (runs === 2) {
            $("main").append(mainRow);
            runs = 0;
        };

        var RaceEl = $("<section>");
        RaceEl.attr("class", "col-12 col-md-5 col-lg-5 col-xl-5 col-sm-12 mx-auto bg-dark p-4 mb-4");

        var Row1 = $("<div>");
        Row1.attr("class", "row");

        var Col1 = $("<div>");
        Col1.attr("class", "col-12 col-lg-5 text-center text-white");

        var Col1Row = $("<div>");
        Row1.attr("class", "row");

        var TrackName = $("<h2>");
        TrackName.attr("class", "col-12 fs-1 fw-bold");
        TrackName.text(curRaces[i].circuit);

        var EventDate = $("<h3>");
        EventDate.attr("class", "");
        EventDate.text(`${dayjs(curRaces[i].fp1).format("MMMM DD")} - ${dayjs(curRaces[i].race).format("DD")}`);

        var TrackImgDiv = $("<div>");
        TrackImgDiv.attr("class", "col-7 col-lg-10 mx-auto mt-3 bg-light rounded");

        var TrackImg = $("<img>");
        TrackImg.attr("class", "mw-100")
        TrackImg.attr("src", curRaces[i].image);
        TrackImg.attr("alt", "Track Image");
        
        TrackImgDiv.append(TrackImg);
        Col1Row.append(TrackName, EventDate, TrackImgDiv);
        Col1.append(Col1Row)
    
        var Col2 = $("<div>");
        Col2.attr("class", "col-12 col-lg-7 m-auto mt-3 mt-0-lg text-center text-white");

        var FP1 = $("<div>");
        FP1.attr("class", "row py-1");

        var FP1Title = $("<p>");
        FP1Title.attr("class", "col-5 fs-4");
        FP1Title.text("Practice 1");

        var FP1Date = $("<p>");
		FP1Date.attr("class", "col-5 fs-4");
        FP1Date.text(dayjs(curRaces[i].fp1).format("MMM DD"));
        
        FP1.append(FP1Title, FP1Date);

        var FP2 = $("<div>");
        FP2.attr("class", "row py-1");

        var FP2Title = $("<p>");
        FP2Title.attr("class", "col-5 fs-4");
        FP2Title.text("Practice 2");
        
        var FP2Date = $("<p>");
		FP2Date.attr("class", "col-5 fs-4");
        FP2Date.text(dayjs(curRaces[i].fp2).format("MMM DD"));
        
        FP2.append(FP2Title, FP2Date);

        var FP3 = $("<div>");
        FP3.attr("class", "row py-1");

        var FP3Title = $("<p>");
        FP3Title.attr("class", "col-5 fs-4");
        FP3Title.text("Practice 3");
        
        var FP3Date = $("<p>");
		FP3Date.attr("class", "col-5 fs-4");
        FP3Date.text(dayjs(curRaces[i].fp3).format("MMM DD"));
        
        FP3.append(FP3Title, FP3Date);

        var Quali = $("<div>");
        Quali.attr("class", "row py-1");

        var QualiTitle = $("<p>");
        QualiTitle.attr("class", "col-5 fs-4");
        QualiTitle.text("Qualifying");
        
        var QualiDate = $("<p>");
		QualiDate.attr("class", "col-5 fs-4");
        QualiDate.text(dayjs(curRaces[i].quali).format("MMM DD"));
        
        Quali.append(QualiTitle, QualiDate);

        var Race = $("<div>");
        Race.attr("class", "row py-1");

        var RaceTitle = $("<p>");
        RaceTitle.attr("class", "col-5 fs-4");
        RaceTitle.text("Race");
        
        var RaceDate = $("<p>");
        RaceDate.attr("class", "col-5 fs-4");
        RaceDate.text(dayjs(curRaces[i].race).format("MMM DD"));

        Race.append(RaceTitle, RaceDate);
            
        Col2.append(FP1, FP2, FP3, Quali, Race);
        Row1.append(Col1, Col2);
        RaceEl.append(Row1);

        mainRow.append(RaceEl);

        runs++;
	}
}

$(document).ready(function () {
	pullRaces();
});
