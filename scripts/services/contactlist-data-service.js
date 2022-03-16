
var app = angular.module("addrBook",[]);
app.service("myhttpService",['$http', function ($http) {
    this.httpGetService = function () {
       return $http.get('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts');
    }
}]);