// Dependency injections should happen here!
// TODO: Please add 'tablesurfer.services' once services have been created

angular.module('tablesurfer', [
  'ui.router',
  'ngMaterial',
  'Home'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // FIXME: From David - change it back to home after routing works
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    });

})
