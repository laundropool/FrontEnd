import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../Interface/Transaction';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  constructor(private userService:UserService) { }
  data:ITransaction[];
  userId:string;
  flag:boolean;
  err:any;
  water:number;
  ngOnInit() {
    this.userId=this.userId=sessionStorage.getItem("userId").replace(/ /g, '');
    this.userService.fetchTransaction(this.userId).subscribe(
      success => {
        this.data=success;
        if (this.data==null){
            this.flag=true;
        }
        
      },
      error =>{
        this.err=error;
      }
    )
    this.userService.savedWater(this.userId).subscribe(
      success=>{
        this.water=success;
      },
      error=>{
        this.water=0;
      }
    )
    
  }

}
