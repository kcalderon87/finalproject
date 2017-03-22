angular
	.module('myWatchList.splash')
	.controller('SplashCtrl', SplashCtrl);

function SplashCtrl($state) {
	var vm = this;

vm.continue = function() {

	$state.go('app.splash');

	}

}