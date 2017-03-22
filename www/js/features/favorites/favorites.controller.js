angular
	.module('myWatchList.favorites')
	.controller('FavoritesCtrl', FavoritesCtrl);

function FavoritesCtrl(api, $q, $state) {
	var vm = this;

	var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt3107288')

    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });

	}