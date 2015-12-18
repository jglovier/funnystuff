$(function() {
	$(".search-term").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#query").val();
		var url = "https://www.googleapis.com/youtube/v3/search";
		var params = {
			q: searchTerm,
			part: 'snippet, id',
			type: 'video',
			maxResults: 5,
			order: "viewCount",
			key: 'AIzaSyDNyaE18VY8b5qw3vk6j6y_RGHsBhAmaLU'
		};
		function showResults(results) {
	    	var output = "";
	      	$.each(results, function (key, value){
	        var thumb = value.snippet.thumbnails.high.url;
	        var title = value.snippet.title;
	        var videoId = value.id.videoId;
	        console.log(thumb);
	        output += '<ul class="searchList"><li><h4>' + title + ' - ' + videoId + '</h4><img src="' + thumb +'></li></ul>';
	          $('#search-results').prepend(output);	
	        });	
      	};
		$.getJSON(url, params, function(data) {
	      	console.log(data.items);
	      	showResults(data.items);
	    });
	});
})