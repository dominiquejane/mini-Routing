var app = angular.module('miniRouting', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			templateUrl: 'js/home/homeTmpl.html',
			url: '/',
			controller: 'homeCtrl'
		})
		.state('settings', {
			templateUrl: 'js/settings/settingsTmpl.html',
			controller: 'settingsCtrl',
			url: '/settings'
		})
		.state('products', {
			templateUrl: 'js/products/productTmpl.html',
			controller: 'productsCtrl',
			url: '/products/:id'
		});

$urlRouterProvider
	.otherwise('/');

});

