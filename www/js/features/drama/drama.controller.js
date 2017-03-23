angular
	.module('myWatchList.drama')
	.controller('DramaCtrl', DramaCtrl);

function DramaCtrl(api, $q, $state) {
	var vm = this;

    var schedule = [];
    vm.tvshow = {};
    vm.isListView = false;

    var promises = [
        api.show('tt1520211'),
        api.show('tt1475582'),
        api.show('tt0413573'),
        api.show('tt5511582'),
        api.show('tt0944947'),
        api.show('tt4288182'),
        api.show('tt1578873'),
        api.show('tt1837576')


    ];

    $q.all(promises).then(function(imDB){
        vm.schedule = imDB;
        console.log(imDB);
    });
{

    $state.go('app.browse');

    }

}