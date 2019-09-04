const check = function(button) {
  axios.get(button.url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }).then(response => {
    button.isActive = true;
  }).catch(error => {
    button.isActive = false;
  });
};

var vm = new Vue({
    el: '#buttons',
    data: {
      buttons: {
        gitbucket: { name: 'gitbucket', url: 'http://localhost:8080/gitbucket/', isActive: false},
        jenkins: { name: 'jenkins', url: 'http://localhost:8080/jenkins/', isActive: false},
        sonarqube: { name: 'sonarqube', url: 'http://localhost:8080/sonarqube/', isActive: false},
      }
    },
    methods: {
      send: function(event) {
        window.location.href = event.target.attributes.url.value;
      },
    },
    mounted() {
      for (const value of Object.values(this.buttons)) {
        check(value);
      }
    }
  });