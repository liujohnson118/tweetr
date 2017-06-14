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
  }
];


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
  let tweetHeaderName = $("<span>").text(tweetData.user.name); //Add user name to header
  tweetHeaderName.addClass("name");
  tweetHeader.append(tweetHeaderName);

  //Add handle to header
  let tweetHeaderHandle = $("<span>").text(tweetData.user.handle); //Add user name to header
  tweetHeaderHandle.addClass("handle");
  tweetHeader.append(tweetHeaderHandle);

  //Add clear fix to header
  tweetHeader.append("<div class='clearfix'></div>");

  //Begin editing footer
  tweetFooter.append("<span class='ago'>10 days ago</span>");
  tweetFooter.append("<i class='fa fa-heart' aria-hidden='true'></i>");
  tweetFooter.append("<i class='fa fa-retweet' aria-hidden='true'></i>");
  tweetFooter.append("<i class='fa fa-flag' aria-hidden='true'></i>");

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
  for(var i = 0;i < tweets.length;i++){
    let tempTweet=createTweetElement(tweets[i]);
    $(document).ready(function(){
      $("#allTweets").append(tempTweet);
    });
  }
}


renderTweets(data);
