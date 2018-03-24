$("document").ready(function() {

var topics = ['vikings', 'packers', 'bears', 'lions', 'eagles', 'cowboys', 'redskins', 'giants', 'saints', 'panthers', 'falcons', 'bucanneers', 'cardinals', '49ers', 'seahawks', 'rams'];
var searchTeam;
var searchTerm;



function displayTeam() {

    var team = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#movies-view").text(JSON.stringify(response));
      renderButtons();
    });
  }


function renderButtons() {
$("#gifbuttons").empty();

for (i = 0; i < topics.length; i++) {

    teamName = topics[i];

    var buttons = $("<button>");
    buttons.addClass("team");
    buttons.attr("data-name", teamName);
    buttons.text(teamName);
    $("#gifbuttons").append(buttons);
    console.log(teamName);
}
}



queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=RgOKKocZs8kcyzsU7F1E4hNZms3pjHFu&limit=10";
queryURL += "&q=" + searchTerm;


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      



  })

  renderButtons();








});