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


/*
Part 2 of task
prototype inheritance
*/

/*constructor Human*/
function Human() {
	this.name 	= 'Vasya',
	this.age 		= '18',
	this.gender = 'male',
	this.weight = '90kg'
}
/*instance of the class Human*/
var human = new Human();

/*constructor Worker*/
function Worker() {
	this.job 		= 'GoIT',
	this.salary = '400$',
	this.work 	= function() {
		alert('Working...');
	}
}
/*prototype*/
Worker.prototype = human;
Student.prototype = human;
/*instance of the class Worker and Student*/
var worker1  = new Worker();
var worker2  = new Worker();
var student1 = new Student();
var student2 = new Student();

/*constructor Student*/
function Student() {
	this.study 	= 'DonNTU',
	this.salary = '800грн',
	this.work 	= function() {
		alert('Looks series 0_0');
	}
}

/*check work prototype*/
console.log('"worker1" took field "name" from "Human": ',worker1.name);
console.log('"worker2" took field "age" from "Human": ',worker2.age);
console.log('"student1" took field "gender" from "Human": ',student1.gender);
console.log('"student2" took field "weight" from "Human": ',student2.weight);


