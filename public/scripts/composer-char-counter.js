$(document).ready(function() {

  const textInput = $("#tweet-text");
  textInput.keyup(function() {
    console.log(140 - $(this).val().length);
  });

});