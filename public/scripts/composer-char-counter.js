$(document).ready(function() {

  const textInput = $("#tweet-text");
  textInput.keyup(function() {
    const counter = $(this).parent().find(".counter");
    counter.text(140 - $(this).val().length);


  });

});