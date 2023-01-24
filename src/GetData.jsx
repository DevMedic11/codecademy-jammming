const url= 'https://api.spotify.com';

var client_id = '9cb95fa3f27a439bb811ee1123af24bd';
var client_secret = 'fda7ebe84ea2423388077331a8a71fa5';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});
function GetData(){
    
}