import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }
  geolocationPosition:any;
  ngOnInit() {
  }
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  pass:boolean=false;
  error:boolean=false;
  submitLoginForm(form:NgForm){
    
    this.userService.login(form.value.email,form.value.password).subscribe(
        responseLoginStatus => {
          if (responseLoginStatus.search("U")==-1){
              this.pass=true;
              
          }
          else{
            sessionStorage.setItem('userId', responseLoginStatus);
            this.closeAddExpenseModal.nativeElement.click();
            this.route.navigate(['\home']);
            
          }
        },
        responseLoginError => {
          this.error=true;
        },
        () => console.log("SubmitLoginForm method executed successfully")
      );
    

  }

}


 