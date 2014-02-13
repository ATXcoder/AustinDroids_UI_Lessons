var plane1;
var plane2;
var lesson;
var content;
var lesson_title;
var lesson_number;

$(document).ready(function() {
	plane1 = document.getElementById('plane1');
	plane2 = document.getElementById('plane2');
	lesson = document.getElementById('lesson_content');
	content = document.getElementById('content');

	plane1.className = 'plane down title';
	plane1.addEventListener('webkitTransitionEnd', transitionEnd1, true);
});

function transitionEnd2() {
	plane2.removeEventListener('webkitTransitionEnd', transitionEnd2);
	addContent();
}

function transitionEnd1() {
	plane2.className = 'plane down title';
	plane2.addEventListener('webkitTransitionEnd', transitionEnd2, true);
	plane1.removeEventListener('webkitTransitionEnd', transitionEnd1);
}

function addContent() {
	//First get lesson content
	var lessonNum = getUrlVars();
	$('#lesson_content').load('lessons/' + lessonNum + '.html', function() {
		//Get lesson number and title
		lesson_title = $('#lesson_title').text();
		lesson_number = $('#lesson_number').text();

		plane1.innerHTML = '<b>Lesson: </b><span>' + lesson_number + '</span>';
		plane2.innerHTML = '<b>Title: </b><span>' + lesson_title + '</span>';

		var lessonContent = document.getElementById('#lesson_content');
		Rainbow.color(lessonContent, function() {});
	});
	
}

function getUrlVars() {
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	return hashes;
}