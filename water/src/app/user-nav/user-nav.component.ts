import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit() {
    if (sessionStorage.getItem('userId')==null){
      this.router.navigate([''])
    }
    
  }
  logout(){
    sessionStorage.removeItem('userId');
    sessionStorage.clear();
    this.router.navigate([''])
  }

}
