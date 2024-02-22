import { Component,HostBinding,ViewChild, effect, signal } from '@angular/core';
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
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  constructor(private router: Router,private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.componentName = this.route.snapshot.firstChild?.data['title'];
      }
    })
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
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
