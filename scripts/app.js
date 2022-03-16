var app = angular.module("addrBook",[]);
    app.controller("contactListCtrl",'myhttpService', function ($scope,  myhttpService) {

        $scope.info = null;
        myhttpService.httpGetService().then(function(response){
            $scope.info = response.data;
         }, function(error){
            console.log(error);
         });
        
        $scope.addMe = function(){
            return {
                firstName: $scope.newFirstName,
                lastName:$scope.newLastName,
                phoneNumber: $scope.newPhone
            }
        }
        $scope.addItem = function(){
            for(var i=0;i<$scope.info.length;i++){
                if(($scope.info[i].name == $scope.addMe().name)||
                ($scope.info[i].tel == $scope.addMe().tel)){
                    alert("name or phone number was repeated");
                    return false;
                }
            }
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