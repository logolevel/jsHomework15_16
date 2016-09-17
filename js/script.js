$(function() {
/*
google api key
AIzaSyCBt-JVUE0GMXq95OI8zUW43kh0GUzlAM4

pixabay api key
3324605-cd4276f44c6c24381ca9603e8
*/

/*variables*/
var imgTag;
var API_KEY = '3324605-cd4276f44c6c24381ca9603e8';
var URL;

/*search function*/
function imgSearch(imgTag) {
/*delete result for new search*/
	$('.img_link').remove();
	$('.content p').remove();

	URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(imgTag)+"&orientation=horizontal";

	$.getJSON(URL, function(data){
	    if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){ 
	        	// console.log(hit);
	        	var imgUrl = this.previewURL;
	        	var pageUrl = this.pageURL;
	        	var imgHeight = this.imageHeight;
	        	var imgWidth = this.imageWidth;
	        	$('.content').append('<a class="img_link" href="'+ pageUrl +'"><img src="'
	        		+ imgUrl +'"><span>'+ imgWidth +' x '+ imgHeight +'<span></a>');
	       	});
	    else 
	    	/*if value not found*/
	    		$('.content').append('<p>Спробуй ще...</p>');
	});

	return;

}
/*function - get input value
and transfer to imgSearch function*/
function contentOutput() {
	imgTag = $('#img_tag').val();
	imgSearch(imgTag);
}

/*event search press button*/
$('#btn_search').on('click', function() {
	contentOutput()
});

/*event search press enter*/
$('#img_tag').keypress(function(e) {
/*if pressed enter*/
    if(e.which == 13) {
    	contentOutput()
    }
});


/*end jQuery*/
});

