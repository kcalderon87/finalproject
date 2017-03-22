angular
	.module('myWatchList.search')
	.controller('SearchCtrl', SearchCtrl);

function SearchCtrl($state) {
	var vm = this;

	vm.searchInfo = {
		imDB: '',
		imDBShow: '',
		imDBProfilePicture: ''

	}


vm.continue = function() {
	// var search = new shows.getShow (
	// 	vm.searchInfo.imDB,
	// 	vm.searchInfo.imDBShow,
	// 	vm.searchInfo.imDBProfilePicture
	// 	);
	// shows.shows.push(search);

	$state.go('app.results');

	}

}

	// else {
	// 	$state.go('results');
	// }