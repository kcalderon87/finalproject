angular
	.module('myWatchList.action')
	.config(actionConfig);

function actionConfig($stateProvider) {
	$stateProvider.state('app.action', {
		name: 'action',
		url: '/playlists/4',
		views: {
        'menuContent': {
          templateUrl: 'js/features/action/action.html',
          controller: 'ActionCtrl',
		controllerAs: 'ActionVM'
        }
       }
	})
}