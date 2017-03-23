angular
	.module('myWatchList.scifi')
	.config(scifiConfig);

function scifiConfig($stateProvider) {
	$stateProvider.state('app.scifi', {
		name: 'scifi',
		url: '/playlists/6',
		views: {
        'menuContent': {
          templateUrl: 'js/features/scifi/scifi.html',
          controller: 'ScifiCtrl',
		controllerAs: 'ScifiVM'
        }
       }
	})
}