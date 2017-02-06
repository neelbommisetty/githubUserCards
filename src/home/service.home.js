export default class HomeService {
  constructor($http) {
    this.$http = $http;
  }
  getUserDetails(username) {
    return this.$http.get(`https://api.github.com/users/${username}`);
  }
  static HomeServiceFactory($http) {
    return new HomeService($http);
  }
}
HomeService.HomeServiceFactory.$inject = ['$http'];

