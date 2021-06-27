import { Subscription } from 'rxjs';
import { SidebarService } from './sidenav.service';
import { ROUTES } from './sidenav-routes.config';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

  public onSideBarChanged$: Subscription;
  public isOpen: boolean = false;
  public menuItems: any[] = [];

  constructor(private sidebarService: SidebarService,
              private elementRef: ElementRef) { 
    this.onSideBarChanged$ = this.sidebarService.isSidebar$.subscribe(val => this.isOpen = val);
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(item => item);
    
    
  }


}
