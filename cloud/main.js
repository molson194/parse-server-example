
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("smsLoginVerification", function(request, response) {
  var auth_id = "MAMJCXYTDMNZQ4MZHKNW";
  var auth_token = "NTkxZmJkYmI0NGExZjk3ZGMzNzU0YTgzZjA5NTBm";
  var plivo_number = "16623829952";

  Parse.Cloud.httpRequest({
    method: "POST",
    headers: {'Content-Type': 'application/json',},
    url: 'https://'+auth_id+':'+auth_token+'@api.plivo.com/v1/Account/'+auth_id+ '/Message/',
    body: {
      "src" : plivo_number,
      "dst" : request.params.phonenumber,
      "text" : request.params.messagebody
    },
    success: function(httpResponse) {
      console.log(httpResponse.text);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });
});

Parse.Cloud.define("smsNewMembers", function(request, response) {
  var auth_id = "MAMJCXYTDMNZQ4MZHKNW";
  var auth_token = "NTkxZmJkYmI0NGExZjk3ZGMzNzU0YTgzZjA5NTBm";
  var plivo_number = "16623829952";

  Parse.Cloud.httpRequest({
    method: "POST",
    headers: {'Content-Type': 'application/json',},
    url: 'https://'+auth_id+':'+auth_token+'@api.plivo.com/v1/Account/'+auth_id+ '/Message/',
    body: {
      "src" : plivo_number,
      "dst" : request.params.phonenumber,
      "text" : "You were just added to a new Anonme group. Download Anonme from the App Store to view your group"
    },
    success: function(httpResponse) {
      console.log(httpResponse.text);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });

});
