import { ROUTES } from './sidebar-routes.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public menuItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(item => item);
  }

}
