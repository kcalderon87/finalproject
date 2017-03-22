angular
	.module('myWatchList.results')
	.controller('ResultsCtrl', ResultsCtrl);

function ResultsCtrl(api, $q, $state) {
	var vm = this;

	var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt2193021')

    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });

	}