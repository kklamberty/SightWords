/**
 * Created by kk on 9/11/14.
 */


angular.module('sightwordsApp', [])
    .controller('SightwordsController', ['$scope', function($scope) {
        $scope.wordlists = [
            {name:'Unit1', words: ['dog', 'cat', 'bird'], includeInCurrent: true},
            {name:'Unit2', words: ['he', 'she', 'they'], includeInCurrent:false}];

        $scope.addList = function() {
            $scope.wordlists.push({name:$scope.wordlistName, includeInCurrent:false});
            $scope.wordlistName = ''; // what to put in teh box once you add the list
        };

    }]);

