import angular from 'angular';
import HomeController from './ctrl.home';
import HomeService from './service.home';
import routes from './routes.home';

import './home.scss';

export default angular.module('app.home', [])
  .config(routes)
  .controller('homeController', HomeController)
  .factory('homeService', HomeService.HomeServiceFactory)
  .name;
