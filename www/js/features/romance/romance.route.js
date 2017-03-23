angular
	.module('myWatchList.romance')
	.config(romanceConfig);

function romanceConfig($stateProvider) {
	$stateProvider.state('app.romance', {
		name: 'romance',
		url: '/playlists/5',
		views: {
        'menuContent': {
          templateUrl: 'js/features/romance/romance.html',
          controller: 'RomanceCtrl',
		controllerAs: 'RomanceVM'
        }
       }
	})
}