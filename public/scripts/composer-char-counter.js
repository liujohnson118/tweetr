/*
* Event handler for characeter counter in textarea for class new-tweet
* Output: update remaning character count in the counter for a new tweet.
*/
$(document).ready(function(){
  const maxLength=Number($('.counter').html());
  $('.new-tweet').on('keyup','textarea',function(){
    let messageLength = $(this).val().length;
    $(this).closest('form').find('.counter').text(maxLength-messageLength);
  });
})