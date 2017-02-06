import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';

import 'font-awesome/css/font-awesome.css';
import 'angular-toastr/dist/angular-toastr.css';

import homeModule from './home';
import './app.scss';

angular.module('app', [
  uirouter,
  ngSanitize,
  ngAnimate,
  toastr,
  homeModule,
]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  }).hashPrefix('!');
});
angular.bootstrap(document, ['app']);
