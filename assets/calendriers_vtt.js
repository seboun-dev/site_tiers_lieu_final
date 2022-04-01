(function(){
	var element = document.getElementById("onclich");
	element.addEventListener('mouseout', function(e){
	if (!(window.matchMedia('(max-width: 999px) , handheld').matches)){
		var relatedTarget = e.relatedTarget;

		while (relatedTarget != element && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
			relatedTarget = relatedTarget.parentNode;
		}

		if (relatedTarget != element) {
			var monLi = document.querySelectorAll('.deroulement');
			for (var i=0 ; i<monLi.length ; i++)
				{
				monLi[i].style.maxHeight= '0px';
				monLi[i].style.transition = 'all .5s';
				}
		}
	}}, false);
	var element2 = document.getElementById("onclich2");
	element2.addEventListener('mouseout', function(e){
	if (!(window.matchMedia('(max-width: 999px) , handheld').matches)){
		var relatedTarget = e.relatedTarget;

		while (relatedTarget != element2 && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
			relatedTarget = relatedTarget.parentNode;
		}

		if (relatedTarget != element2) {
			var monLi = document.querySelectorAll('.deroulement2');
			for (var i=0 ; i<monLi.length ; i++)
				{
				monLi[i].style.maxHeight= '0px';
				monLi[i].style.transition = 'all .5s';
				}
		}
	}}, false);



	var elements = document.querySelectorAll("nav a");
	for (var i=0 ; i<elements.length ; i++){
		elements[i].addEventListener('mouseout', function(e){
				if (!(window.matchMedia('(max-width: 999px) , handheld').matches)){
					e.target.style.backgroundColor = 'rgba(32,32,32,1)';
					e.target.style.color = '#CCC';
					e.target.style.transition = 'all .5s';
				}
		}, false);
		elements[i].addEventListener('mouseover', function(e){
				if (!(window.matchMedia('(max-width: 999px) , handheld').matches)){
					e.target.style.backgroundColor = '#CCC';
					e.target.style.color = 'rgba(32,32,32,1)';
					e.target.style.transition = 'all .5s';
				}
		}, false);
	}
})();

$( window ).resize(function() {
	var li = document.querySelectorAll('nav a');
	if (window.matchMedia('(min-width: 1000px)').matches){
		var monLi = document.querySelectorAll('.deroulement');
		for (var i=0 ; i<monLi.length ; i++){
			monLi[i].style.maxHeight= '0';
			monLi[i].style.borderTop = 'none';
			monLi[i].style.transition = 'all 0s';
			monLi[i].style.marginTop = '1px'
		}
		var monLi2 = document.querySelectorAll('.deroulement2');
		for (var i=0 ; i<monLi2.length ; i++){
			monLi2[i].style.maxHeight= '0';
			monLi2[i].style.borderTop = 'none';
			monLi2[i].style.transition = 'all 0s';
			monLi2[i].style.marginTop = '1px'
		}
		
		for (var i=0 ; i<li.length ; i++){
			li[i].style.backgroundColor = "rgba(32,32,32,1)";
			li[i].style.color = "#CCC";
			li[i].style.transition = 'all 0s';
		}
		var image = document.querySelectorAll('#class_img img');
		for (var i=0 ; i<image.length ; i++){
			image[i].style.width = '';
		}
	}
	if (window.matchMedia('(max-width: 999px)').matches){
		for (var i=0 ; i<li.length ; i++){
			li[i].style.backgroundColor = "#CCC";
			li[i].style.color = "#000";
			li[i].style.transition = 'all 0s';
		}
		redimensionnement2();
	}
	redimensionnement();
});
function redimensionnement(){ 
 
    var $image = $('img#fond');
    var image_width = $image.width(); 
    var image_height = $image.height();     
     
    var over = image_width / image_height; 
    var under = image_height / image_width; 
     
    var body_width = $(window).width(); 
    var body_height = $(window).height(); 
     
    if (body_width / body_height >= over) { 
      $image.css({ 
        'width': body_width + 'px', 
        'height': Math.ceil(under * body_width) + 'px', 
        'left': '0px', 
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px' 
      }); 
    }  
     
    else { 
      $image.css({ 
        'width': Math.ceil(over * body_height) + 'px', 
        'height': body_height + 'px', 
        'top': '0px', 
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px' 
      }); 
    }
}
function redimensionnement2(){
	if (window.matchMedia('(max-width: 999px)').matches){
		var image = document.querySelectorAll('#class_img img');
		var body_width = $(window).width();
		for(var i=0 ; i<image.length ; i++){
			image[i].style.width = (body_width-50) + 'px';
		}
	}
}
$(document).ready(function(){
    redimensionnement();
	redimensionnement2();
	var li1 = document.querySelectorAll('.deroulement');
	var li2 = document.querySelectorAll('.deroulement2');
	for(var i=0 ; i<li1.length ; i++){
		li1[i].style.borderTop = 'none';
	}
	li1[1].style.marginTop = '1px';
	for(var i=0 ; i<li2.length ; i++){
		li2[i].style.borderTop = 'none';
	}
}); 