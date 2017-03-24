angular
	.module('myWatchList.animation')
	.controller('AnimationCtrl', AnimationCtrl);

function AnimationCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt2930604'),
        api.show('tt0096697'),
        api.show('tt1710308'),
        api.show('tt1486217'),
        api.show('tt1561755'),
        api.show('tt1305826'),
        api.show('tt3061046'),
        api.show('tt1942683')


    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });

}