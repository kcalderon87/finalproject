angular
	.module('myWatchList.search')
	.config(searchConfig);

function searchConfig($stateProvider) {
	$stateProvider.state('app.search', {
		name: 'search',
		url: '/search',
		views: {
        'menuContent': {
          templateUrl: 'js/features/search/search.html',
          controller: 'SearchCtrl',
		controllerAs: 'SearchVM'
        }
       }
	})
}