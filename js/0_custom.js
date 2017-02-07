$(document).ready(function(){

(function( $ ){
var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!');
  }
})
});

(function( $ ){
var waypoint_program = new Waypoint({
  element: document.getElementById('waypoint1'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
    this.destroy
  }
})
});

});

// var waypoint_program = new Waypoint({
//   element: document.getElementById('waypoint1'),
//   handler: function(direction) {
//     console.log('Scrolled to programing waypoint!')
//     this.destroy()
//   }
// });
// var waypointweb = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function() {
//     }
// })

// var waypointdesign = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function() {
//     }
// })
// var waypointms = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function() {
//     }
// })
// (function( $ ){
// // hide our element on page load
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
// });


$('#waypoint1').waypoint(function(){
  $('#c').animate({
        width: "95%",
    }, 600, 'easeOutCirc'), 
  $('#cplus').animate({
        width: "85%",
    }, 600, 'easeOutCirc'),
  $('#csharp').animate({
        width: "55%",
    }, 600, 'easeOutCirc'),
  $('#py').animate({
      width: "90%",
  }, 600, 'easeOutCirc'),
  $('#java').animate({
      width: "60%",
  }, 600, 'easeOutCirc'),
  $('#r').animate({
      width: "99%",
  }, 600, 'easeOutCirc')
  // var program=document.getElementById('c');
  // animate({program.style.width = "95%"), 'easeInOutBounce'};
  // var program=document.getElementById('c++');
  // program.style.width = "85%", 'easeInOutBounce';
  // var program=document.getElementById('c#');
  // program.style.width = "55%", 'easeInOutBounce';
  // var program=document.getElementById('py');
  // program.style.width = "90%", 'easeInOutBounce';
  // var program=document.getElementById('java');
  // program.style.width = "60%", 'easeInOutBounce';
  // var program=document.getElementById('r');
  // program.style.width = "99%", 'easeInOutBounce';
});

// $('#waypointweb').waypoint(function(){
//   var web=document.getElementById('html');
//   web.style.width = "100%";
//   var web=document.getElementById('js');
//   web.style.width = "70%";
//   var web=document.getElementById('bs');
//   web.style.width = "92%";
//   var web=document.getElementById('php');
//   web.style.width = "89%";
//   var web=document.getElementById('sql');
//   web.style.width = "85%";
//   var web=document.getElementById('wp');
//   web.style.width = "95%";
// });

// $('#waypointdesign').waypoint(function(){
//   var web=document.getElementById('ps');
//   web.style.width = "95%";
//   var web=document.getElementById('il');
//   web.style.width = "75%";
//   var web=document.getElementById('au');
//   web.style.width = "100%";
//   var web=document.getElementById('pr');
//   web.style.width = "90%";
//   var web=document.getElementById('ae');
//   web.style.width = "84%";
//   var web=document.getElementById('fcp');
//   web.style.width = "83%";
// });

// $('#waypointms').waypoint(function(){
//   var web=document.getElementById('msw');
//   web.style.width = "99%";
//   var web=document.getElementById('mse');
//   web.style.width = "80%";
//   var web=document.getElementById('mspp');
//   web.style.width = "97%";
//   var web=document.getElementById('msv');
//   web.style.width = "87%";
//   var web=document.getElementById('msp');
//   web.style.width = "80%";
// });