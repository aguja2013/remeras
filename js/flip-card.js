var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);


var init = function() {
  var card = document.getElementById('card2');
  
  document.getElementById('flip2').addEventListener( 'click', function(){
    card2.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);