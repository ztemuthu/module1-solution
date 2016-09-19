(
  function(){
    'use strict';
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",lunchCheckController);

    lunchCheckController.$inject = ['$scope'];

    function lunchCheckController($scope){
      $scope.lunchItems=null;
      $scope.lunchAdvice = "";
      $scope.checkItems = function(){
        var entries = $scope.lunchItems;
        console.log("entries :" , entries);
        var itemCount = getCountOfLunchEntries(entries);
        var message = getAdvice(itemCount);
        $scope.lunchAdvice = message;
      };



      function getCountOfLunchEntries(items){
        var count = 0;
        if (items != null && items.length > 0)
          count =  items.split(",").length;

        return count;

      };

      function getAdvice(itemCount){
        var message;
        if(itemCount==0){
          message = "Please enter data first";
        }else if (itemCount > 0 && itemCount <=3){
          message = "Enjoy!";
        }else{
          message = "Too much!";
        }
        return message;
      };

    };

  }
)();
