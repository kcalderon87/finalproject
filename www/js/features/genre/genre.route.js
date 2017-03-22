angular
	.module('myWatchList.genre')
	.config(genreConfig);

function genreConfig($stateProvider) {
	$stateProvider.state('app.single', {
		name: 'genre',
		url: '/playlists/:playlistId',
		views: {
        'menuContent': {
          templateUrl: 'js/features/genre/genre.html',
          controller: 'PlaylistCtrl',
		controllerAs: 'GenreVM'
        }
       }
	})
}