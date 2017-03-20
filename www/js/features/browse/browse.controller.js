angular
	.module('myWatchList.browse')
	.controller('BrowseCtrl', BrowseCtrl);

function BrowseCtrl(api, $q) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show(0),
        api.show(1)

    ];

    $q.all(promises).then(function(shows){
        vm.schedule = shows;
        console.log(shows);
    });


	}



// function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// }