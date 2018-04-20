//delaying the video by 1.5 seconds
if ($(window).width() > 998) {
  var video = document.getElementById("vid");
  if (video !== null) {
    setTimeout(function() {
      document.getElementById("vid").play();
    }, 1500);
  }
} else {
  $('#vid').hide();
  $('#mobile-background').css('display', 'block');
}

//To turn off sound when tab not in focus
$(window).blur(function() {
  $('#vid')[0].muted = true;
});
$(window).focus(function() {
  if($(".sound-bar").hasClass("active")){
    console.log("sound off");
    $('#vid')[0].muted = true;
  }else
  {
   console.log("sound on");
  $('#vid')[0].muted = false;
  }
});

//menu on clicked
$('.hamburger-container').click(function() {
  //get bar elements
  var barArr = document.getElementsByClassName('bar');
  console.log('menu pressed');
  //slide in menu div
  if ($('#sidebar').css("display") === 'none') {
    console.log("if is running");
    $('#sidebar').css('display', 'block');
    $('#sidebar').attr({class: "animated slideInLeft"}).on('animationend webkitAnimationEn MSAnimationEnd oAnimationEnd', function() {
      $('#sidebar').css('display', 'block');
    } //slide out menu div
    );

    barArr[0].className = "bar top";
    barArr[1].className = "bar middle";
    barArr[2].className = "bar bottom";

    $('.title-container').hide();

  } else {
    console.log("else is running");
    $('#sidebar').attr({class: "animated slideOutLeft"}).on('animationend webkitAnimationEn MSAnimationEnd oAnimationEnd', function() {
      $('#sidebar').css('display', 'none');
    });
    barArr[0].className = "bar";
    barArr[1].className = "bar";
    barArr[2].className = "bar";

    $('.title-container').show();

  }
});
//hides the content
$('.hamburger-container').click(function() {
  if ($('.content-container').css('display') === 'none') {
    console.log('fadeIn');
    $('.content-container').fadeIn();
  } else {
    console.log('fadeOut');
    $('.content-container').fadeOut();
  }
});

// sound bar
$(function() {
  $(".audio-icon").click(function() {
    $(".sound-bar").toggleClass("active");
  })
});
//mute and unmute when click on soundbar
$(function() {
  $(".audio-icon").click(function() {
    if ($("video").prop('muted')) {
      $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
});


/********************************WATCH NOW STARTS******************************/
//hides the WATCH NOW button
$('.watch-now').hide();
/********************************WATCH NOW ENDS********************************/

/*********************************TRAILER STARTS*******************************/
//Play when click on play button
$('.pause').hide();
$('#video-trailer').hide();
$(document).ready(function() {
  $('.play').on('click', function(ev) {
    $("#video-trailer")[0].src += "&autoplay=1";
    ev.preventDefault();
      //
  });
});
$(".play").on('click', function(){
    $('#video-trailer').fadeIn(1000);
    $('.play').hide();
});
//Stop when click on pause button
$( "#video-trailer" ).mouseenter(function() {
  $(this).fadeTo(500,0.8);
  $('.pause').show();
  $('.poster').css('background-image', 'none');
});
$( "#video-trailer" ).mouseout(function() {
  $(this).fadeTo(500,1);
});
/*********************************TRAILER ENDS*********************************/

/************************ONSITE LOAD FUNCTION STARTS***************************/
$(document).ready(function() {
  console.log("initial javascript running");
  //change item menu padding
  if ($(window).width < 628) {
    var paddingVar = $(window).height() / 8.1;
    paddingVar += "px";
    $('.menu-item').css('padding', paddingVar);
    console.log(paddingVar);
  }

/****************************ACCLAIMS TRANSITIONS STARTS************************/
  //shows the first acclaim container
  $('.acclaim-container:first').css('display','inline-block');

  //fills in the first circle
  $('.circle:first').css('backgroundColor','white');

  //if circle is clicked then change fill circle
  $('.circle').click(function(){
      $('.circle').css("backgroundColor", "rgba(0,0,0,0)");
      $(this).css("backgroundColor","white");
  });

  //if second circle is clicked then empty others and fill in this one
  $('.circle:nth-child(2)').click(function()
  {
      $('.acclaim-container').css("display","none");
      $('.acclaim-container:nth-child(2)').fadeIn(1000);
  });
  //if third circle is clicked then empty others and fill in this one
  $('.circle:nth-child(3)').click(function()
  {
      $('.acclaim-container').css("display","none");
      // $('.acclaim-container:nth-child(3)').css("display","inline-block");
      $('.acclaim-container:nth-child(3)').fadeIn(1000);
  });
  //if first circle is clicked then empty others and fill in this one
  $('.circle:nth-child(1)').click(function()
  {
      $('.acclaim-container').css("display","none");
      $('.acclaim-container:nth-child(1)').fadeIn(1000);
  });
});
/****************************ACCLAIMS TRANSITIONS ENDS*************************/

/************************ONSITE LOAD FUNCTION ENDS*****************************/
  //
  // $(window).resize(function(){
  //   var paddingVar = $(window).height() / 50;
  //   paddingVar += "px";
  //   $('.menu-item').css('padding', paddingVar);
  //   console.log(paddingVar);
  // });
