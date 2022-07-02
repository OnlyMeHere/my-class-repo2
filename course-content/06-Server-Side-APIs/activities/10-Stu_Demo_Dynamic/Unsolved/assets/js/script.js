var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      for (var = 1;i < data.length; 1++) {

        var login = data[i].login;
        var url = data[i].html_url;
        
      }
      // TODO: Loop through the data and generate your HTML
    });
}
fetchButton.addEventListener('click', getApi);
