import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-coin',
  templateUrl: './buy-coin.component.html',
  styleUrls: ['./buy-coin.component.css']
})
export class BuyCoinComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  userId:string;
  ngOnInit() {
    this.userId=this.userId=sessionStorage.getItem("userId");
  }
  add(form:NgForm){
    this.userService.buyCoins(this.userId.replace(/ /g, ''),form.value.accr,form.value.coins).subscribe(
      success=>{
        alert("Added Successfully")
        this.router.navigate(['\home']);
      },
      error=>{
        alert("Some Error")
        this.router.navigate(['\home']);
      }
    )
  }

}
