import { Component, OnInit } from '@angular/core';
import { userModel } from '../user-model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: userModel = {}
  allUsers: any = []
  constructor(private api: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.api.getAllUsersAPI().subscribe((result: any) => {
      this.allUsers = result
    })
  }

  cancel() {
    this.user = {}
  }

  saveUser() {
    const existingUser = this.allUsers.find((item: any) => item.id == this.user.id)
    if (existingUser) {
      alert("Employee ID already exist...Use unique ID to add new user!!!")
    } else {
      //Api call
      this.api.addUserAPI(this.user).subscribe({
        next: (result: any) => {
          console.log(result);
          alert("User added successfully to database")
          this.router.navigateByUrl('/users')
        },
        error: (reason: any) => {
          console.log(reason);
        }
      })
    }
  }
}
