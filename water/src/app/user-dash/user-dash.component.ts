import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../Interface/User';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(private userService:UserService) { }
  userId:string;
  user:IUser;
  error:boolean=false;
  userName:string="";
  userEmail:string="";
  mobile:string="";
  wash:boolean=false;
  status:number;
  cash:number;
  ngOnInit() {
    this.getUserInfo();
    this.status=1;
    
  }
  getUserInfo(){
  this.userId=sessionStorage.getItem("userId");
  this.userService.userInfo(this.userId).subscribe(
    responseLoginStatus => {
      this.user=responseLoginStatus;
      this.userName=this.user.username;
      this.userEmail=this.user.useremail;
      this.mobile=this.user.usermobile;
      this.wash=this.user.washing;
      this.userService.fetchCash(this.userId).subscribe(
        success =>{
          this.cash=success;
        },
        error => {
          this.error=true;
        }
      )
    },
    responseLoginError => {
      this.error=true; 
    },
    () => console.log("FetchInfo method executed successfully")
  );

  }

}
