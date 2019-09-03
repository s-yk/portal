var check = function(url) {
  var result = false;
  axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }).then(response => {
    result = false
  }).catch(error => {
    result = true
  })

  return result;
}

var buttons = [
  { name: 'gitbucket', url: "https://www.google.com", disabled: check("http://localhost:8080") },
  { name: 'jenkins', url: "https://www.google.com", disabled: check("http://localhost:8080") },
  { name: 'sonarqube', url:"https://www.google.com", disabled: check("http://localhost:8080") },
]

var vm = new Vue({
    el: '#buttons',
    data: {
      buttons: buttons
    },
    methods: {
      send: function(event) {
        window.location.href = event.target.attributes.url.value
      },
    },
  });