import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  arr:any[];
  userId:string;
  tempArr:any[]=[];
  requestId:number;
  distance:any;
  date:any;
  wt:number;
  guestId:string;
  name:string;
  matchId:number;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userId=this.userId=sessionStorage.getItem("userId").replace(/ /g, '');
    this.userService.fetchPendingRequest(this.userId).subscribe(
      success=>{
        this.arr=success;
        this.arr.forEach(element => {
          console.log(element)
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
          //alert(this.guestId)
          this.userService.fetchUserLaundry(this.requestId).subscribe(
            success1 =>{
              console.log(success1)
              this.date=success1.washingTime;
              this.wt=success1.weight;
              console.log(this.date)
              this.userService.userInfo(this.guestId).subscribe(
                success2=>{
                  this.name=success2.username;
                  console.log(this.name)
                  this.tempArr.push({"name":this.name,"distance":this.distance,"date":this.date,"weight":this.wt,"matched":element.matchedRequestId})
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
  accept(num:number){
    this.userService.acceptRequest(num,"Accepted").subscribe(
      success=>{
        alert("Accepted")
        //this.ngOnInit();
      },
      error=>{
        alert("Rejected")
      }
    )
    location.reload()
    //this.ngOnInit();
  }
  reject (num:number){
    this.userService.acceptRequest(num,"Rejected").subscribe(
      success=>{
        alert("Rejected")
        //this.ngOnInit();
      },
      error=>{
        alert("Rejected")
      }
    )
    //this.ngOnInit();
  }

}
