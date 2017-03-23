angular
	.module('myWatchList.drama')
	.config(dramaConfig);

function dramaConfig($stateProvider) {
	$stateProvider.state('app.drama', {
		name: 'drama',
		url: '/playlists/2',
		views: {
        'menuContent': {
          templateUrl: 'js/features/drama/drama.html',
          controller: 'DramaCtrl',
		controllerAs: 'DramaVM'
        }
       }
	})
}