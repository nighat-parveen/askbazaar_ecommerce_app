import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { ROUTES } from './sidebar-routes.config';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
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
