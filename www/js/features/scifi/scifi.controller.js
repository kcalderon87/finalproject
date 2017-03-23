angular
	.module('myWatchList.scifi')
	.controller('ScifiCtrl', ScifiCtrl);

function ScifiCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt5114356'),
        api.show('tt3107288'),
        api.show('tt0436992'),
        api.show('tt2193021'),
        api.show('tt4016454'),
        api.show('tt4532368'),
        api.show('tt0460681'),
        api.show('tt2364582')



    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });
{

    $state.go('app.browse');

    }

}