$(document).ready(function(){

$('#element-to-animate').css('opacity', 0);
$('#element-to-animate1').css('opacity', 0);

$('#waypoint1').waypoint(function() {
    $('#element-to-animate').addClass('bounceInDown');
    $('#element-to-animate').css('opacity', 100);
    console.log (this);
    this.destroy();
    //alert('You have scrolled to an entry.');
})

$('#waypoint1').waypoint(function() {
    $('#element-to-animate1').addClass('bounceInUp');
    $('#element-to-animate1').css('opacity', 100);
    console.log (this);
    this.destroy();
    //alert('You have scrolled to an entry.');
})

$('#waypoint2').waypoint(function(){
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
  }, 600, 'easeOutCirc');
  this.destroy();
  })

$('#waypoint3').waypoint(function(){
  $('#html').animate({
        width: "100%",
    }, 600, 'easeOutCirc'), 
  $('#js').animate({
        width: "75%",
    }, 600, 'easeOutCirc'),
  $('#bs').animate({
        width: "92%",
    }, 600, 'easeOutCirc');
  this.destroy();
  })

$('#waypoint5').waypoint(function(){
  $('#php').animate({
      width: "89%",
  }, 600, 'easeOutCirc'),
  $('#sql').animate({
      width: "85%",
  }, 600, 'easeOutCirc'),
  $('#wp').animate({
      width: "95%",
  }, 600, 'easeOutCirc');
  this.destroy();
  })

$('#waypoint5').waypoint(function(){
  $('#ps').animate({
        width: "95%",
    }, 600, 'easeOutCirc'), 
  $('#il').animate({
        width: "75%",
    }, 600, 'easeOutCirc'),
  $('#au').animate({
        width: "100%",
    }, 600, 'easeOutCirc');
  this.destroy();
  })

$('#waypoint6').waypoint(function(){
  $('#pr').animate({
      width: "90%",
  }, 600, 'easeOutCirc'),
  $('#ae').animate({
      width: "87%",
  }, 600, 'easeOutCirc'),
  $('#fcp').animate({
      width: "85%",
  }, 600, 'easeOutCirc');
  this.destroy();
  });

$('#waypoint7').waypoint(function(){
  $('#msw').animate({
        width: "98%",
    }, 600, 'easeOutCirc'), 
  $('#mse').animate({
        width: "80%",
    }, 600, 'easeOutCirc'),
  $('#mspp').animate({
        width: "97%",
    }, 600, 'easeOutCirc');
  this.destroy();
  })

$('#waypoint8').waypoint(function(){
  $('#msv').animate({
      width: "87%",
  }, 600, 'easeOutCirc'),
  $('#msp').animate({
      width: "80%",
  }, 600, 'easeOutCirc');
  this.destroy();
  });

$("#morebio").hide();
$("#biomore").click(function(){
    $("#morebio").fadeIn(1000);
    $('#biomore').hide(50);
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".labelcontact").animate({
                fontSize: "30px",
            }, 600, 'easeOutCirc'),
    }
});

});

// $('#toptrigger').waypoint(function() {
//     $('#waypoint').removeClass('onn');
// }, {
//     offset: '-1'
// });
