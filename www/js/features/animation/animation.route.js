angular
	.module('myWatchList.animation')
	.config(animationConfig);

function animationConfig($stateProvider) {
	$stateProvider.state('app.animation', {
		name: 'animation',
		url: '/playlists/3',
		views: {
        'menuContent': {
          templateUrl: 'js/features/animation/animation.html',
          controller: 'AnimationCtrl',
		controllerAs: 'AnimationVM'
        }
       }
	})
}