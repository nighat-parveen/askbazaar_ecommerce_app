import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  index = 1;
  constructor() { }

  ngOnInit(): void {
    this.loadFile('/assets/js/slider.js');
  }

  loadFile(url: string){
    let script = document.createElement('script');
    script.src = url;
    
    document.getElementsByTagName('head')[0].appendChild(script);
    


  }


  prev(){
    const slider = document.querySelector('.banner-slider');
    
  }
}
