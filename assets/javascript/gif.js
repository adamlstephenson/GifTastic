$("document").ready(function() {

var topics = ['Minnesota Vikings', 'Green Bay Packers', 'Chicago Bears', 'Destroit Lions', 'Philadelphia Eagles', 'Dallas Cowboys', 'Washington Redskins', 'New York Giants', 'New Orleans Saints', 'Carolina Panthers', 'Atlanta Falcons', 'Tampa Bay Buccaneers', 'Arizona Cardinals', 'San Francisco 49ers', 'Seattle Seahawks', 'Los Angeles Rams'];


function renderButtons() {

    $("#gifbuttons").empty();

    for (i = 0; i < topics.length; i++) {

        teamName = topics[i];

        var buttons = $("<button>");
        buttons.addClass("team");
        buttons.attr("value", teamName);
        buttons.text(teamName);
        $("#gifbuttons").append(buttons);
}
}

function buttonCreator() { 
    $("button.team").on("click", function() {
        var x = $(this).val();

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=RgOKKocZs8kcyzsU7F1E4hNZms3pjHFu&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            for(j = 0; j < response.data.length; j++){
                var rating = response.data[j].rating;
                var stillImageURL = response.data[j].images.downsized_still.url;
                var animateImageURL = response.data[j].images.downsized.url;
                var gifImageStill = $("<img src='"+ stillImageURL +"'>");
                var gifImageAnimate = $("<img src='"+ animateImageURL +"'>");
                gifImageStill.addClass("gif");
                gifImageStill.attr("data-state", "still");
                gifImageAnimate.addClass("gif");
                gifImageAnimate.attr("data-state", "animate");
                $("#gifContainer").prepend("<p> Rating: " + rating + "</p>");
                $("#gifContainer").prepend(gifImageStill);
                animateGif();
            }

        })

    })
 }

 function submitButton() {
    $("#submitButton").on("click", function () {
        event.preventDefault();
           var searchTerm = $(".form-control").val().trim();
           var newButton = $("<button>");
           newButton.addClass("team");
           newButton.attr("value", searchTerm);
           newButton.text(searchTerm);
           $("#gifbuttons").append(newButton);
           buttonCreator();
    })
}

function animateGif() {
    $("img.gif").on("click", function() {
        var state = $(this).attr("data-state");
        console.log(state);
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
    
    })
}


renderButtons();
buttonCreator();
submitButton();



});