/*
* Functions to count clicks on emojis on individual tweets
*/
$(document).ready(function(){
  /*
  * Function to count clickes on hearts
  */
  $('#allTweets').on('click','.fa-heart',function(){
    var count = $(this).closest("footer").find(".heartCount");
    if(count.text()){
      count.text(Number(count.text()) + 1);
    }else{
      count.text(1);
    }
  });
  /*
  * Function to count clickes on retweets
  */
  $('#allTweets').on('click','.fa-retweet',function(){
    var count = $(this).closest("footer").find(".retweetCount");
    if(count.text()){
      count.text(Number(count.text()) + 1);
    }else{
      count.text(1);
    }
  });
  /*
  * Function to count clickes on flags
  */
  $('#allTweets').on('click','.fa-flag',function(){
    var count = $(this).closest("footer").find(".flagCount");
    if(count.text()){
      count.text(Number(count.text()) + 1);
    }else{
      count.text(1);
    }
  });
})