

var app = angular.module('addrBook',['contactData']);
    app.controller("contactListCtrl", function ($scope, MyhttpService) {

    $scope.info = null;

    $scope.newFirstName="";
    $scope.newLastName="";
    $scope.newPhone="";

    MyhttpService.httpGetService().then(function(response){
        $scope.info = response.data;
        }, function(error){
        console.log(error);
    });
    
        
    app.directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9]/g, '');

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        return transformedInput;
                    }
                    return undefined;
                }            
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    });

    $scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }
    };
    
    $scope.addMe = function(){
        return {
            firstName: $scope.newFirstName,
            lastName:$scope.newLastName,
            phone: $scope.newPhone
        }
    }
    $scope.addItem = function(){
        if($scope.contactForm.$invalid) return false;
            $scope.info.push($scope.addMe());
    }
        
    $scope.removeItem = function(){
        $scope.info.splice(this.$index,1)
    }      
    $scope.change = function(){
        index = this.$index;
        $scope.showMe = function(indx){
            if(indx == index){
            return true;                 
            }
        }    
    }
    $scope.save = function(){
        index = this.$index;
        $scope.showMe = function(indx){
            if(indx == index){
            return false;                 
            }
        }    
    }            
})