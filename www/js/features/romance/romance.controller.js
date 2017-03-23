angular
	.module('myWatchList.romance')
	.controller('RomanceCtrl', RomanceCtrl);

function RomanceCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt3006802'),
        api.show('tt3636060'),
        api.show('tt1843230'),
        api.show('tt0413573'),
        api.show('tt1405406'),
        api.show('tt1578873'),
        api.show('tt4179452'),
        api.show('tt2281375')


    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });
{

    $state.go('app.browse');

    }

}