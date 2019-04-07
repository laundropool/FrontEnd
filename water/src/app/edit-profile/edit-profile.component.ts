import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../Interface/User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  name:string;
  mob:string;
  userId:string;
  user:IUser;
  wash:boolean=false;
  error:boolean;
  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.userId=sessionStorage.getItem("userId");
    this.userService.userInfo(this.userId).subscribe(
      responseLoginStatus => {
        this.user=responseLoginStatus;
        this.name=this.user.username;
        this.mob=this.user.usermobile;
        this.wash=this.user.washing;
      },
      responseLoginError => {
        this.error=true;
      },
      () => console.log("FetchInfo method executed successfully")
    );
  
    }

}
