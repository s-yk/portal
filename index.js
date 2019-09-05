const check = function(button) {
  axios.get(button.url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }).then(response => {
    button.isActive = true;
    button.status = response.status
  }).catch(error => {
    button.isActive = false;
    button.status = error.message
  });
};

var vm = new Vue({
    el: '#buttons',
    data: {
      buttons: [
        { name: 'gitbucket', url: 'http://localhost:8080/gitbucket/', isActive: false, status: 200},
        { name: 'jenkins', url: 'http://localhost:8080/jenkins/', isActive: false, status: 200},
        { name: 'sonarqube', url: 'http://localhost:8080/sonarqube/', isActive: false, status: 200},
      ]
    },
    methods: {
      send: function(event) {
        window.location.href = event.target.attributes.url.value;
      },
    },
    mounted() {
      for (const value of this.buttons) {
        check(value);
      }
    }
  });