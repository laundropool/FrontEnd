import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user.service';
import { IUser } from '../Interface/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService,private router: Router) { }
  geolocationPosition:any;
  user:IUser;
  status:any;
  errorMsg:any;
  success:boolean=false;
  error:boolean=false;
  ngOnInit() {
    
  }
  submitSignUpForm(form:NgForm){
    
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
              this.user={userid:"",useremail: form.value.email,username:form.value.name,usermobile: form.value.mobile,userpassword:form.value.password,latitude:position.coords.latitude,longitude:position.coords.longitude,washing:form.value.washing}
              this._userService.SignUp(this.user).subscribe(
                responseLoginStatus => {
                  this.status = responseLoginStatus;
                  if (this.status=="0" || this.status=="-99"){
                      this.error=true;
                  }
                  else{
                    this.success=true;
                  }
                  
                  setTimeout(() =>this.router.navigate(['/']), 3000)
                },
                responseLoginError => {
                  this.errorMsg = responseLoginError;
                  this.error=true;
                  setTimeout(() =>this.router.navigate(['/']), 3000)
                },
                () => console.log("SubmitLoginForm method executed successfully")
              );
          },
          error => {
            this.user={userid:"",useremail: form.value.email,username:form.value.name,usermobile: form.value.mobile,userpassword:form.value.password,latitude:"0",longitude:"0",washing:form.value.washing}
            this._userService.SignUp(this.user).subscribe(
              responseLoginStatus => {
                this.status = responseLoginStatus;
                if (this.status=="0"){
                    this.error=true;
                }
                else{
                  this.success=true;
                }
                
                setTimeout(() =>this.router.navigate(['/']), 3000)
              },
              responseLoginError => {
                this.errorMsg = responseLoginError;
                this.error=true;
                setTimeout(() =>this.router.navigate(['/']), 3000)
              },
              () => console.log("SubmitLoginForm method executed successfully")
            );
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };
    
    

  }

}
