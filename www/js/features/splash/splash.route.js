angular
	.module('myWatchList.splash')
	.config(splashConfig);

function splashConfig($stateProvider) {
	$stateProvider.state('app.splash', {
		name: 'splash',
		url: '/splash',
		views: {
        'menuContent': {
          templateUrl: 'js/features/splash/splash.html',
          controller: 'SplashCtrl',
		controllerAs: 'SplashVM'
        }
       }
	})
}