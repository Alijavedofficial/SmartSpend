import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  shouldEnableScrollbar: boolean = true; 
  isExpanded: boolean = true;

  constructor(private router: Router) {}
  
 toggleSideBar(): void {
  this.isExpanded = !this.isExpanded;
  this.sidenav.toggle()
 }

  enableScrollbar() {
    this.shouldEnableScrollbar = true;
  }
  
  
  disableScrollbar() {
    this.shouldEnableScrollbar = false;
  }

  isRouteActive(route:string):boolean {
   return this.router.url === route;
  }
}
