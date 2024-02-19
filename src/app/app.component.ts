import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shouldEnableScrollbar: boolean = true; 

  constructor(private router: Router) {}
  
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
