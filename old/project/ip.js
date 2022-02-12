
    var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

// использование
getJSON('http://ip-api.com/json',
function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
    var ip = data.query;
    document.getElementById('out').textContent=ip;
    //document.write(data.query);
  }
});