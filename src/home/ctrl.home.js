export default class HomeController {
  constructor(homeService, toastr) {
    this.greeting = 'Hello Bob !';
    this.homeService = homeService;
    this.toastr = toastr;
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
      this.toastr.error('No Such User Found!', 'Error Occured');
    });
  }
  onDelete(e, id) {
    e.stopPropagation();
    e.preventDefault();
    this.users = this.users.filter((user) => user.id !== id);
  }
  sortBy(e, propertyName) {
    e.preventDefault();
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  }
}

HomeController.$inject = ['homeService', 'toastr'];
