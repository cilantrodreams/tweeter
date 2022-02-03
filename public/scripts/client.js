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

  }

  // takes an array of tweet objects and appends them to the tweet container
  const renderTweets = function(tweets) {
    // loop through tweets
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.container').append($tweet);
    }
  }

  // handler for tweet submit 
  $('section.new-tweet > form').submit(function(event) {
    event.preventDefault();
    console.log(this);
    const data = $(this).serialize();
    console.log(data);

    if (data === 'text=' || data === null) {
      alert(`Say what's on your mind!`);
      return;
    }
    $.post('/tweets/', data);
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
