angular
	.module('myWatchList.action')
	.controller('ActionCtrl', ActionCtrl);

function ActionCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [

        api.show('tt5511582'),
        api.show('tt1600194'),
        api.show('tt4474344'),
        api.show('tt1595859'),
        api.show('tt4428122'),
        api.show('tt0452046'),
        api.show('tt2661044'),
        api.show('tt3514324')


    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });

}