<html>
  <head>
    <title>Public Client Flow</title>
    <script src='//code.jquery.com/jquery-1.11.2.min.js'></script>
    <script>
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
          results = regex.exec(location.hash);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    if(window.location.hash) {
        console.log(location.hash);
        var token = getParameterByName('access_token');

        $.ajax({
            url: "https://api.mypurecloud.com/api/v1/users/me",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + token);},
            success: function(data) {
                console.log(data);
            }
        });

        location.hash=''

    } else {
        var queryStringData = {
            response_type : "token",
            client_id : "bfadf7a0-3364-4f65-9fda-00d37877113f",
            redirect_uri : "http://localhost:8085/oauth2/callback"
        }

        window.location.replace("https://login.mypurecloud.com/authorize?" + jQuery.param(queryStringData));
    }
    </script>
</head>
<body>

</body>
</html>
