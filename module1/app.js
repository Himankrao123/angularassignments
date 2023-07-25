angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchItems = '';
  $scope.message = '';

  $scope.checkLunchItems = function () {
    // Trim leading and trailing spaces from the input
    $scope.lunchItems = $scope.lunchItems.trim();

    if ($scope.lunchItems === '') {
      $scope.message = 'Please enter data first';
    } else {
      var items = $scope.lunchItems.split(',');
      var itemCount = items.length;

      // Remove empty items
      items = items.filter(function (item) {
        return item.trim() !== '';
      });

      // Update the input with filtered items
      $scope.lunchItems = items.join(',');

      if (itemCount <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  };
}
