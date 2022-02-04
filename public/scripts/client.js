/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // takes tweet object and returns a tweet <article> element containing tweet HTML structure
  const createTweetElement = (tweetData) => {

    // build header
    const $header = $('<header>');
    const $avatars = $('<img>').attr('src', `${tweetData.user.avatars}`);
    const $name = $('<p>').text(`${tweetData.user.name}`);
    const $handle = $('<p>').text(`${tweetData.user.handle}`).addClass('handle');
    $header.append($avatars, $name, $handle);

    // build content
    const $content = $('<div>');
    const $text = $('<p>').text(`${tweetData.content.text}`);
    $content.append($text);

    // build footer
    const $footer = $('<footer>');
    const $createdAt = $('<p>').text(`${timeago.format(tweetData.created_at)}`);
    const $flag = $('<i>').addClass('fa-solid fa-flag');
    const $retweet = $('<i>').addClass('fa-solid fa-retweet');
    const $like = $('<i>').addClass('fa-solid fa-heart');
    $footer.append($createdAt, $flag, $retweet, $like);

    // build tweet
    const $tweet = $('<article>').addClass('tweet');
    $tweet.append($header, $content, $footer);

    return $tweet;

  };

  // takes an array of tweet objects and appends them to the tweet container
  const renderTweets = function(tweets) {
    // clear tweet containers
    $('.tweet').remove();

    // select sibling to insert tweets after
    const insertPoint = $('.new-tweet');

    // loop through tweets
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      insertPoint.after($tweet);
    }
  };

  // handler for tweet submit
  $('section.new-tweet > form').submit(function(event) {
    event.preventDefault();
    const tweetText = $(this).children('textarea');
    const tweetError = $(this).siblings('.error');
    tweetError.hide();

    // Check for empty tweet content
    if (tweetText.val() === '' || tweetText.val() === null) {
      tweetError.text("You gotta write something! Say what's on your mind!")
        .slideDown('slow');
      return;
    }

    // check if tweet is too long
    if (tweetText.val().length > 140) {
      tweetError.text("You wrote too much! That's more than 140 characters!")
        .slideDown('slow');
      return;
    }

    const data = $(this).serialize();
    $.post('/tweets/', data)
      .then(() => {
        tweetText.val("");
        loadTweets();
      });
  });

  // function to fetch tweets from /tweets route
  const loadTweets = function() {
    $.get('/tweets')
      .then((tweets) => {
        renderTweets(tweets);
      });
  };

  loadTweets();

});
