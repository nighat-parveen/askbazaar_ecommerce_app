import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isSidebar$: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }



  setSidebarState(state: boolean){
    this.isSidebar$.next(state);
  }

  getSidebarState(){
    return this.isSidebar$.getValue();
  }

  toggle(){
    this.isSidebar$.next(!this.isSidebar$);
  }

  
}
