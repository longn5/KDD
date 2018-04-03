//delaying the video by 1.5 seconds
setTimeout(function(){
  document.getElementById("vid").play();
}, 1500);

//To turn off sound when tab not in focus
$(window).blur(function()
{
  $('#vid')[0].muted = true;
});
$(window).focus(function()
{
  $('#vid')[0].muted = false;
});
