$(function() {
	function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
	}
  var req = createCORSRequest("GET", "https://cors-anywhere.herokuapp.com/https://tournamentscheduler.net/schedule/MTA4MTIyMDc3NzE");
  if (req) {
  	req.onload = function(data) {
    	console.log(data);
      var full = data.target.response;
      $("#target").html($(full).find(".schedule  "));
      
      var headers = document.getElementsByTagName("th"); 
for (var i = 0; i < headers.length; i++) {
  headers[i].innerHTML = headers[i].innerHTML.replace("Round", "Rodadas")
                           .replace("Matchup", "Clãs")
                           .replace("Notes", "Observação")
                           .replace("Score", "Pontos");
}
    };
    req.send();
    }
})



$(function() {
	function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
	}
  var req = createCORSRequest("GET", "https://cors-anywhere.herokuapp.com/https://tournamentscheduler.net/schedule/MTA4MTIyMDc3NzE/results");
  if (req) {
  	req.onload = function(data) {
    	console.log(data);
      var full = data.target.response;
      $("#target2").html($(full).find(".schedule  "));
      
      var headers = document.getElementsByTagName("th"); 
for (var i = 0; i < headers.length; i++) {
  headers[i].innerHTML = headers[i].innerHTML.replace("Player", "Clã")
                           .replace("Played", "Partidas Jogadas")
                           .replace("Wins", "Vitórias")
                           .replace("Draws", "Empates")
                           .replace("Losses", "Derrotas")
                           .replace("Points", "Pontos")
                           ;
}

$('table tr').find('td:eq(6),th:eq(6)').remove();
$('table tr').find('td:eq(6),th:eq(6)').remove();


    };
    req.send();
    }
})
