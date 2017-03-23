angular
	.module('myWatchList.comedy')
	.controller('ComedyCtrl', ComedyCtrl);

function ComedyCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt2712740'),
        api.show('tt1826940'),
        api.show('tt0472954'),
        api.show('tt2467372'),
        api.show('tt3487356'),
        api.show('tt3551096'),
        api.show('tt2712612'),
        api.show('tt0898266')
      
    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });
{

    $state.go('app.browse');

    }

}