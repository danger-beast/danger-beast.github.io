$(document).ready(function(){
  // get input type = number 
  var ingInput = $('#ingInput');
  var cardInput = $('#cardInput');  

  // set on key up listeners
  ingInput.on('input', {max: 10}, validateInput);
  cardInput.on('input', {max: 17}, validateInput);

  // prevent e key into numeric field
  ingInput.on('keydown', function(event) {
    if(event.keyCode === 69) event.preventDefault();
  });
  cardInput.on('keydown', function(event) {
    if(event.keyCode === 69) event.preventDefault();
  });
});

function validateInput( event ) {
  var max = event.data.max || 10,
  value = $(this).val(),
  len = value.length;

  if(len > max) {
    $(this).val(value.slice(0, max));
  }
}