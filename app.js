
$(function() {
  FastClick.attach(document.body);

  function fullscreen(element) {
    $(element.target).toggleClass('fullscreen');
    /*
    var elem = element.currentTarget;
    if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else {
      $(element.target).toggleClass('fullscreen');
    }
    */
  }

  $('.card').click(fullscreen)
});