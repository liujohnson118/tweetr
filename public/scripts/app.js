/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json

/*
* Sample tweet data given
*/


"use strict";
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  },
];


//1497499683600
//1461113796368
/*
* Function to create a tweet for display
* Input: tweetData-an object for tweet reference tweets.json
* Output: tweet-an article element to be placed in index.html for item ID allTweets
*/
function createTweetElement(tweetData){

  let tweet = $("<article>").addClass("tweet");
  let tweetHeader = $("<header>"); //Create header for tweet
  let tweetFooter = $("<footer>"); //Create footer for tweet

  //Begin editing header
  //Create and add user profile photo
  let profilePhoto = $("<img>").addClass("profilePhoto");
  profilePhoto.attr("src",tweetData.user.avatars.small);
  tweetHeader.append(profilePhoto);

  //Add name to header
  let tweetHeaderName = $("<span class=name>").text(tweetData.user.name);
  tweetHeader.append(tweetHeaderName);

  //Add handle to header
  let tweetHeaderHandle = $("<span class='handle'>").text(tweetData.user.handle);

  //Add clear fix to header
  tweetHeader.append("<div class='clearfix'></div>");

  //Begin editing footer
  //relative time of creation
  tweetFooter.append($("<time class=timeago>").text(
    moment(tweetData.created_at).fromNow())
  );

  //Add retweet, heart, flag buttons
  tweetFooter.append("<i class='hover-show fa fa-heart' aria-hidden='true'></i>");
  tweetFooter.append("<i class='hover-show fa fa-retweet' aria-hidden='true'></i>");
  tweetFooter.append("<i class='hover-show fa fa-flag' aria-hidden='true'></i>");

  //Add content to tweet
  tweet.append(tweetHeader);
  tweet.append($("<p>").text(tweetData.content.text));
  tweet.append("<div class='clearfix'></div>");

  //Add footer to tweet
  tweet.append(tweetFooter);
  tweet.append("<div class='clearfix'></div>");
  return tweet;
}


/*
* Function to render tweets page by looping through tweets data given
*/
function renderTweets(tweets){
  $('#allTweets').empty();
  for(var i = 0;i < tweets.length;i++){
    let tempTweet=createTweetElement(tweets[i]);
    $(document).ready(function(){
      $("#allTweets").append(tempTweet);
    });
  }
}

/*
* Function for handling POST requests for new tweet
* If user input text is not empty and length is within 140, send ajax POST request to create new tweet
* Otherwise print error flash message near the character counter
*/

$(function(){
  /*
* Function to load tweets
* Ajax GET method for rendering (loading) all tweets
* Render all tweets by calling renderTweets in app.js
* If error happends, log error message to console
*/
  function loadTweets(){
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function(tweets){
      renderTweets(tweets);
    },
    error: function(tweets){
      console.log("loadingTweets in app.js NOT WORKING");
    },
    });
  }
  loadTweets();

  /*
  * Function to submit form for new tweet
  * Handles POST request for /tweets/
  * If text for new tweet has length 0 or more than 140, show flash message for error.
  * Otherwise submit form with POST request to /tweets/
  */
  $('#newTweetArea').on('submit',function(event){
    event.preventDefault();
    //loadTweets();
    let text = $('#newTweetArea').closest('.new-tweet').find('textarea').val();
    if(text.length>0 && text.length<=140){
      $.ajax({
      method:'POST',
      url: '/tweets/',
      data: $(this).serialize(),
      success: function(tweets){
        console.log("new tweet submit success");
      },
      error: function(tweets){
        console.log("POST for /tweets/ in app.js NOT WORKING");
      },
    });
      loadTweets();
      console.log("loadTweets after submit success")
    }else{
      $('#newTweetArea').closest('.new-tweet').find('.flashMessage').text("Invalid tweet text");
    }
  });

  $('#composeButton').on('click',function(event){
    event.stopPropagation();
    let textarea=$('#newTweetArea').closest('.new-tweet').find('textarea');
    //textarea.focus();
    $('section.new-tweet').slideToggle();
    let text = textarea.val();
    textarea.text(text+"");
    textarea.focus();
  });
})


