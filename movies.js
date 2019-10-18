/*May 19, 2019*/

"use strict";
$(document).ready(function(){
    var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c2ea55f8b3a8bef3ad16f8d66e357c4b&callback=?";

    //get ionformation 
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.results, function(i, results){ 
            html += "<p>";  //this is for css format

            html += "<img src='http://image.tmdb.org/t/p/w300" + results.poster_path + "' style = 'float: left' >";
            html += "<h2>&nbsp; Title: " + results.title + "</h2>";
            html += "<h2>&nbsp; Release Date: " + results.release_date + "</h2>";
            html += "<h2>&nbsp; Overview: " + results.overview + "</h2>";

            html += "</p>";  //end with <p>:put all contentes to the p to format
        });
        $("#photos").html(html);
    });
});
