angular
	.module('myWatchList.favorites')
	.config(favoritesConfig);

function favoritesConfig($stateProvider) {
	$stateProvider.state('app.favorites', {
		name: 'favorites',
		url: '/favorites',
		views: {
        'menuContent': {
          templateUrl: 'js/features/favorites/favorites.html',
          controller: 'FavoritesCtrl',
		controllerAs: 'FavoritesVM'
        }
       }
	})
}