/* 1. Grab the input */
var button = document.querySelector('.js-go');
button.addEventListener('click', function (e) {
  var input = document.querySelector('.container-textiput').value;
  document.querySelector('.js-container').innerHTML = '';
  research(input);
});

document.querySelector('.js-userinput').addEventListener('keyup', function (e) {
  var input = document.querySelector('.container-textiput').value;
  // if the ke enter is pressed
  if (e.which === 13) {
    research(input);
  }
});

/*2. do the data stuff with API */
function research(key) {
  var url =
    'http://api.giphy.com/v1/gifs/search?q=' +
    key +
    '&api_key=YcpjpUU7ncC5Qx5NkFAhZ2MKBpIb4KlA';
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', function (e) {
    var data = e.target.response;
    pushToDOM(data);
  });
}

/*3. Show me the GIFs */
function pushToDOM(input) {
  var response = JSON.parse(input);
  var imageUrl = response.data;
  imageUrl.forEach((element) => {
    var imageUrl = element.images.fixed_height.url;
    console.log(imageUrl);
    var container = document.querySelector('.js-container');
    container.innerHTML =
      container.innerHTML +
      '<img class="container-image" src=' +
      imageUrl +
      '/>';
  });
}
