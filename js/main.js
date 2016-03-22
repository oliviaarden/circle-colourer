var $html = $('html');
var $ball = $('.ball');
var $pick = $('form');
var $input = $('#pick');

$pick.on('change', function () {
  console.log('works');
  $ball.css('background-color', $input.val());
});
