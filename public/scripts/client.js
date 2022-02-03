/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // takes tweet object and returns a tweet <article> element containing tweet HTML structure
  const createTweetElement = (tweet) => {

    // build header
    const $header = $('<header>');
    const $avatars = $('<img>').attr('src', `${tweetData.user.avatars}`);
    const $name = $('<p>').text(`${tweetData.user.name}`);
    const $handle = $('<p>').text(`${tweetData.user.handle}`);
    $header.append($avatars, $name, $handle);

    // build tweet
    const $tweet = $('<article>').addClass('tweetData');
    $tweet.append($header);

    return $tweet;

  }

  // test code
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);
  console.log('tweet:', $tweet.get(0));

});

{/* <article class="tweet">
      <header>
        <p>Your Name</p>
        <p class="handle">@YourHandle</p>
      </header>
      <div>
        <p>Ground control to Major Tom, Ground control to Major Tom, Take your protein pills and put your helmet on</p>
      </div>
      <footer>
        <p>X days ago</p>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </footer>
    </article> */}