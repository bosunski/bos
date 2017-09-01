

// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar:true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    $('.pic-icon').click(function() {
      myApp.alert('Here comes Mail Page');
    });
});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  $('#subsub').click(function() {
      var to = 'bosunski@gmail.com'
      var message = $('#message').val();
      var subject = $('#subject').val();
      $.myApp = myApp;

      if(message == null || message == '' || subject == null || subject == '') {
        myApp.alert('Please fill the provided spaces');
        $('.modal-title').html('Bosunski\'s Contact');
      } else {
        var url = 'http://fund.dev';
        var resp = '';
        $.myApp = myApp;
        $.ajax({
          url: url,
          method: 'GET',
          data: 'to='+to+'&body='+message+'&subject='+subject,
          headers: {
                    'Access-Control-Allow-Origin': '*'
                },
          success: function(res) {
            $('#error').html(res);
          },
          error: function(res) {
            $('#error').html('Unable to send your message, make sure you have internet connection and try again.')
          }
        })
      }
  });
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
//myApp.alert(page.name);
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
/*$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
}) */
