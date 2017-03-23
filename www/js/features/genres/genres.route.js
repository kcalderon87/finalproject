angular
	.module('myWatchList.genres')
	.config(genresConfig);

function genresConfig($stateProvider) {
	$stateProvider.state('app.genres', {
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