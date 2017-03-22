angular
	.module('myWatchList.results')
	.config(resultsConfig);

function resultsConfig($stateProvider) {
	$stateProvider.state('app.results', {
		name: 'results',
		url: '/results',
		views: {
        'menuContent': {
          templateUrl: 'js/features/results/results.html',
          controller: 'ResultsCtrl',
		controllerAs: 'ResultsVM'
        }
       }
	})
}