$("document").ready(function() {

var topics = ['vikings', 'packers', 'bears', 'lions', 'eagles', 'cowboys', 'redskins', 'giants', 'saints', 'panthers', 'falcons', 'buccaneers', 'cardinals', '49ers', 'seahawks', 'rams'];
var searchTeam;
var searchTerm;



function displayTeam() {

    var team = $("<button>").attr("data-name");
    console.log(team);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=RgOKKocZs8kcyzsU7F1E4hNZms3pjHFu&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response.data[0].images.original.url)
      teamImage = response.data[0].images.original.url
      var images = $("<img>").html(teamImage)
      $("#gifcontainer").append(images);
      renderButtons();
    });
    
  }

function renderButtons() {

    $("#gifbuttons").empty();

    for (i = 0; i < topics.length; i++) {

        teamName = topics[i];

        var buttons = $("<button>");
        buttons.attr("value", teamName);
        buttons.text(teamName);
        $("#gifbuttons").append(buttons);
}
}



      


  renderButtons();

  $("button").on("click", function() {
    var x = $(this).val();
    console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=RgOKKocZs8kcyzsU7F1E4hNZms3pjHFu&limit=10";
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
         var rating = response.data[0].rating;
        var imageURL = response.data[0].images.downsized.url;
        var gifImage = $("<img src='"+ imageURL +"'>")
        console.log(imageURL)
         $("#gifContainer").append("<p> Rating: " + rating + "</p>");
         $("#gifContainer").append(gifImage);

      })

})






});