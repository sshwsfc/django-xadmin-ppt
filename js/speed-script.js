$(function() {

impress().init();
$('.hidden').css('opacity',0);
window.addEventListener('impress:stepenter', function() {
  $('.hidden.active').animate({'opacity': 1});
});
window.addEventListener('impress:stepleave', function() {
  $('.hidden.past').animate({'opacity': 0});
});

});
