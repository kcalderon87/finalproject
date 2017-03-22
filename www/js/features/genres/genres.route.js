angular
	.module('myWatchList.genres')
	.config(searchConfig);

function searchConfig($stateProvider) {
	$stateProvider.state('app.playlists', {
		name: 'genres',
		url: '/playlists',
		views: {
        'menuContent': {
          templateUrl: 'js/features/genres/genres.html',
          controller: 'PlaylistsCtrl',
		controllerAs: 'GenresVM'
        }
       }
	})
}