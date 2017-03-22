angular
	.module('myWatchList.browse')
	.controller('BrowseCtrl', BrowseCtrl);

function BrowseCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt2712740'),
        api.show('tt3107288'),
        api.show('tt4145384'),
        api.show('tt5511582')


    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });
{

    $state.go('app.browse');

    }

}



// function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// }