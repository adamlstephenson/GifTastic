$("document").ready(function() {

var topics = ['vikings', 'packers', 'bears', 'lions', 'eagles', 'cowboys', 'redskins', 'giants', 'saints', 'panthers', 'falcons', 'bucanneers', 'cardinals', '49ers', 'seahawks', 'rams'];
var searchTeam;
var searchTerm;

function renderButtons() {
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
      console.log(response)



  })

  renderButtons();








});