$(document).ready(function() {
  console.log('ground control to major toooooom');
  const textInput = $("#tweet-text");
  textInput.keypress(function() {
    console.log(textInput);
  });
});