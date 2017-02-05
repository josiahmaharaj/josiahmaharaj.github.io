$(document).ready(function(){

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function() {
    }
})
  // hide our element on page load
  $('#element-to-animate').css('opacity', 0);
  $('#element-to-animate1').css('opacity', 0);
 
    $('#waypoint').waypoint(function() {
    $('#element-to-animate').addClass('bounceInDown');
    $('#element-to-animate').css('opacity', 100);
  		});

	  $('#waypoint').waypoint(function() {
	  $('#element-to-animate1').addClass('bounceInUp');
	  $('#element-to-animate1').css('opacity', 100);
  		});
  });

var c=document.getElementById('c');
c.style.width = "95%";
