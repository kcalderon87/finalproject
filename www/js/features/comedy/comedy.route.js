angular
	.module('myWatchList.comedy')
	.config(comedyConfig);

function comedyConfig($stateProvider) {
	$stateProvider.state('app.comedy', {
		name: 'comedy',
		url: '/playlists/1',
		views: {
        'menuContent': {
          templateUrl: 'js/features/comedy/comedy.html',
          controller: 'ComedyCtrl',
		controllerAs: 'ComedyVM'
        }
       }
	})
}