$("document").ready(function() {

    console.log('hello');

var topics = ['vikings', 'packers', 'bears', 'lions', 'eagles', 'cowboys', 'redskins', 'giants', 'saints', 'panthers', 'falcons', 'bucanneers', 'cardinals', '49ers', 'seahawks', 'rams'];
var searchTeam;
var searchTerm;
queryURL = "http://api.giphy.com/v1/gifs/search?&api_key=RgOKKocZs8kcyzsU7F1E4hNZms3pjHFu&limit=10";
queryURL += "&q=" + searchTeam;


for(i = 0; i < topics.length; i++) {
    
    searchTeam = topics[i];


}



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {



  })








});