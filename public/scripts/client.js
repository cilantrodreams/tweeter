/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // takes tweet object and returns a tweet <article> element containing tweet HTML structure
  const createTweetElement = (tweet) => {

    const $tweet = $('<article>').addClass('tweet');

    return $tweet;

  }

  // test code
  const $tweet = createTweetElement();
  console.log('tweet:', $tweet.get(0));

});