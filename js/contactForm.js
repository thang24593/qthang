$(function() {
  var sendInfo = function() {
    var name = $('#your-name').val();
    var email = $('#your-email').val();
    var subject = $('#your-subject').val();
    var mes = $('#your-message').val();

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeFLw_gGeHcST3xUx13iIBbyGWbheMdR0At8scXj-jst2lXiw/formResponse",
      data: {
        "entry.1669418302": name,
        "entry.1404935542": email,
        "entry.502224105": subject,
        "entry.130900349": mes
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          alert('Thank you, I will keep you updated. Stay tuned!');
        }
      }
    });
  };

  var formInput = $('.wpcf7-form input, .wpcf7-form textarea');

  formInput.on('propertychange change click keyup input paste', function() {
    if ($(this).val()) {
      $(this).next('.error-mes').fadeOut();
    }
  });

  $('.btn-send').on('click', function() {
    var passSubmit = true;
    $(this).closest('form').find('.error-mes').remove();
    formInput.each(function(index, element) {
      if (!$(this).val()) {
        passSubmit = false;
        $('<div class="error-mes">This field is required.</div>').insertAfter($(this));
      }
    });

    if (passSubmit) {
      sendInfo();
    }
  });
})
