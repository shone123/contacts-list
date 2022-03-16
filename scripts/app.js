

var app = angular.module('addrBook',['contactData']);
    app.controller("contactListCtrl", function ($scope, MyhttpService) {

    $scope.info = null;

    $scope.contactList = {
        newFirstName:'',
        newLastName:'',
        newPhone:''
    };    
    MyhttpService.httpGetService().then(function(response){
        $scope.info = response.data;
        }, function(error){
        console.log(error);
    });

    $scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }
    };
    
    $scope.addMe = function(){
        return {
            firstName: $scope.contactList.newFirstName,
            lastName:$scope.contactList.newLastName,
            phone: $scope.contactList.newPhone
        }
    }
    $scope.addItem = function(){
        if($scope.contactForm.$invalid) return false;
        $scope.info.push($scope.addMe());
        $scope.clearModel();
    }
    $scope.clearModel = function() {
        $scope.contactList.newFirstName="";
        $scope.contactList.newLastName="";
        $scope.contactList.newPhone="";
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