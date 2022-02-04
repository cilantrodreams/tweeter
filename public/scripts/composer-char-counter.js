$(document).ready(function() {

  // handler to update char counter based on text input length
  const textInput = $("#tweet-text");
  textInput.on('input', function() {

    const counter = $(this).parent().find(".counter");
    counter.text(140 - $(this).val().length);

    // change counter color if negative
    if (counter.text()[0] === '-') {
      counter.css("color", "red");
    } else {
      counter.css("color", "");
    }

  });

});