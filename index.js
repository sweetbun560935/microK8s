$(function() {
  $.ajax({
      url: "http://students.philau.edu/gibble2210/beerthings.json",
      dataType: 'json',
      type: 'GET',
      success: function (beerName) {
          console.log(beerName);
          getBeerName(beerName);
      }
  });

  function getBeerName(beerName) {
      for(var i=0; i<beerName.beers.length; i++) {
      var beers = '<div class="beerName">';
      var beer = beerName.beers[i];

      beers += ('<div class="brew">' + beername + '</div>');

        beers += '</div>';
        $('#return').append(beername);
        }

  }





/*-- Registration Form--*/
$('#message').on('keyup', function() {
    var message = $(this).val();
        color = "#ffffff";

    $('#count').text(message.length);

    if (message.length < 210) {
    } else if (message.length > 210 && message.length < 250) {
        color = "orange";
    } else if (message.length == 250) {
        color = "red";
    }
    $('#count').css('color', color);
});


$('#submit').on('click',function() {
    clearValidation();
    validateFields();

});
function clearValidation() {
    $('.form-error').remove();
}

function validateFields() {
    var inputs = $('input[type=text]'),
        errors = [];
    for (var i=0; i<inputs.length; i++) {
        var input = inputs[i],
            error = '',
            validationType = $(input).data('validate');
            var inputValue = $(input).val();

        if (validationType == 'email') {
            var validEmail = validateEmail(inputValue);
            if (!validEmail) {
                error = $(input).data('error-message');
            }
        }
        if (validationType == 'not-blank') {
            if (inputValue === '') {
                error = $(input).data('error-message');
            }
        }
        errors.push(error);

    }
    for (var e=0;e<errors.length; e++){
        $('.form-errors').append('<li class="form-error">'+errors[e]+'</li>');
    }
}
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
/*--End Registration Form--*/


});
