import { Component } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imgURL: string = "https://ncetir.com/Images/login@4x.png"

  email: string = ""
  password: string = ""

  constructor(private adminAPI: AdminService) { }

  login() {
    if (this.email && this.password) {
      this.adminAPI.loginAPI(this.email, this.password)
    } else {
      alert("Please fill the form completely!!")
    }
  }
}
