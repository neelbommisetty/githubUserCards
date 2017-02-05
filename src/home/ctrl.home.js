export default class HomeController {
  constructor(homeService) {
    this.greeting = 'Hello Bob !';
    this.homeService = homeService;
    this.propertyName = 'name';
    this.reverse = false;
  }
  onSubmit(e) {
    e.preventDefault();
    this.homeService.getUserDetails(this.username)
    .then((res) => {
      if (this.users) {
        this.users.push(res.data);
      } else {
        this.users = [res.data];
      }
      this.username = '';
    }).catch((res) => {
      console.error(res.data); //eslint-disable-line
    });
  }
  onDelete(e, index) {
    e.stopPropagation();
    e.preventDefault();
    this.users = this.users.filter((user, i) => i !== index);
  }
  sortBy(e, propertyName) {
    e.preventDefault();
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  }
}

HomeController.$inject = ['homeService'];
