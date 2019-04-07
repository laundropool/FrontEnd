import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../Interface/User';
import { NgForm } from '@angular/forms';
import { ILaundryRequest } from '../Interface/LaundryRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lookout',
  templateUrl: './lookout.component.html',
  styleUrls: ['./lookout.component.css']
})
export class LookoutComponent implements OnInit {

  
  constructor(private userService:UserService,private router: Router) { }
  userId:string;
  user:IUser;
  error:boolean=false;
  userName:string="";
  userEmail:string="";
  mobile:string="";
  wash:boolean=false;
  laundry:any;
  white:boolean;
  denim:boolean;
  garment:boolean;
  undergarment:boolean;
  weight:number;
  date:any;
  ngOnInit() {
    this.getUserInfo();
    this.userService.fetchLaundryStatus(this.userId).subscribe(
      success=>{
        if (success=="Inactive" || success=="Active"){
          this.router.navigate(['\suggestions'])
        }
      }
    ) 
    
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
    },
    responseLoginError => {
      this.error=true;
    },
    () => console.log("FetchInfo method executed successfully")
  );

  }

  sendRequest(form:NgForm){
    if (form.value.WhitesOnly!=true){
      form.value.WhitesOnly=false;
    }
    if (form.value.DenimsOrTrousersOnly!=true){
      form.value.DenimsOrTrousersOnly=false;
    }
    if (form.value.UnderGarmentsOnly!=true){
      form.value.UnderGarmentsOnly=false;
    }
    if (form.value.GarmentsOnly!=true){
      form.value.GarmentsOnly=false;
    }
    this.laundry={RequestId:0,UserId:this.userId.replace(/ /g, ''),WashingTime:form.value.date,WhitesOnly:form.value.WhitesOnly,DenimsOrTrousersOnly:form.value.DenimsOrTrousersOnly,GarmentsOnly:form.value.GarmentsOnly,UnderGarmentsOnly:form.value.UnderGarmentsOnly,Weight:form.value.Weight,WashingMachine:false,Status:null,RequestSentBy:this.userId}
    this.userService.raiseRequest(this.laundry).subscribe(
      success => {
        this.router.navigate(['/suggestions'])
      },
      error =>{
        alert("ERROR! TRY AGAIN")
      }
    )
  }
  lookForLaundry(){
    this.laundry={RequestId:0,UserId:this.userId.replace(/ /g, ''),WashingTime:this.date,WhitesOnly:this.white,DenimsOrTrousersOnly:this.denim,GarmentsOnly:this.garment,UnderGarmentsOnly:this.undergarment,Weight:this.weight,WashingMachine:true,Status:null,RequestSentBy:this.userId}
    this.userService.raiseRequest(this.laundry).subscribe(
      success => {
        this.router.navigate(['/suggestions'])
      },
      error =>{
        alert("ERROR! TRY AGAIN")
      }
    )
    
  }

}
