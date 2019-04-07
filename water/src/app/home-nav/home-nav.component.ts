import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("userId")!=null){
      this.router.navigate(['\home'])
    }
  }
 

}
