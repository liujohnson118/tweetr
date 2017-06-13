/*
* Event handler for characeter counter in textarea for class new-tweet
* Output: update remaning character count in the counter for a new tweet.
*/
$(document).ready(function(){
  const maxLength=Number($('.counter').html());
  $('.new-tweet').on('keyup','textarea',function(){
    let messageLength = $(this).val().length;
    let counter = $(this).closest('form').find('.counter');
    counter.text(maxLength-messageLength);
  });
})