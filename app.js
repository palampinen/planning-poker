
$(function() {

  function fullscreen(element) {
    $(element.target).toggleClass('fullscreen');
  }

  $('.card').click(fullscreen)
});
