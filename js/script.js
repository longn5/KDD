//delaying the video by 1.5 seconds
setTimeout(function() {
  document.getElementById("vid").play();
}, 1500);

//To turn off sound when tab not in focus
// $(window).blur(function() {
//   $('#vid')[0].muted = true;
// });
// $(window).focus(function() {
//   $('#vid')[0].muted = false;
// });

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
    }//slide out menu div
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
