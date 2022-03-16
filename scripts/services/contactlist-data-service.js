
var app = angular.module("contactData",[]);
app.service("MyhttpService",['$http', function ($http) {
    this.httpGetService = function () {
       return $http.get('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts');
    }
}]);