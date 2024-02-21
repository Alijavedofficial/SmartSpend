import { Component,HostBinding,ViewChild, signal } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
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
  componentName: string = '';
  darkMode = signal<boolean>(false);

  constructor(private router: Router,private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.componentName = this.route.snapshot.firstChild?.data['title'];
      }
    })
  }
  
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

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
