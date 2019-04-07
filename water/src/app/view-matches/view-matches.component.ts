import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-matches',
  templateUrl: './view-matches.component.html',
  styleUrls: ['./view-matches.component.css']
})
export class ViewMatchesComponent implements OnInit {
  arr:any[];
  userId:string;
  tempArr:any[]=[];
  requestId:number;
  distance:any;
  date:any;
  wt:number;
  guestId:string;
  name:string;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    
    this.userId=this.userId=sessionStorage.getItem("userId").replace(/ /g, '');
    this.userService.fetchMatchedStatus(this.userId).subscribe(
      success=>{
        if (success){
          this.router.navigate(['\washing'])
        }
      }
    )
    this.userService.fetchMatchedRequest(this.userId).subscribe(
      success=>{
        this.arr=success;
        this.arr.forEach(element => {
          element.requestSentBy=this.userId;
          //console.log(element)
          if (element.ownerId==this.userId){
            this.requestId=element.washerRequestId;
            this.guestId=element.washerId;
            //alert(this.requestId)
          }
          else{
            this.requestId=element.ownerRequestId;
            this.guestId=element.ownerId;
            //alert(this.requestId)
          }
          this.distance=element.distance;
          //alert(this.distance)
          this.userService.fetchUserLaundry(this.requestId).subscribe(
            success =>{
              this.date=success.washingTime;
              this.wt=success.weight;
              //console.log(this.date)
              this.userService.userInfo(this.guestId).subscribe(
                success=>{
                  this.name=success.username;
                  //console.log(this.name)
                  
                  this.tempArr.push({"name":this.name,"distance":this.distance,"date":this.date,"weight":this.wt,"matched":element})
                  console.log(this.tempArr)
                }
              )
            }
          )
          
        });
      },
      error =>{
        alert("Error")
      }
    )
    
  }
  sendReq(match:any){
    this.userService.sendRequest(match).subscribe(
      success=>{
        alert("sent")
        location.reload();
        //this.ngOnInit();
      },
      error=>{
        alert("error")
        //this.ngOnInit();
      }
    )
    //this.ngOnInit();
    //console.log(match)
  }

}
