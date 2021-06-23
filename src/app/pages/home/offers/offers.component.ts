import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit,AfterViewInit {
 
  constructor(private ele: ElementRef) { }

  ngOnInit(): void {
    
    const sliderContainer = this.ele.nativeElement.querySelector('.banner-slider');
    const sliderImages = this.ele.nativeElement.querySelectorAll('.banner-slider img');

    const prev = this.ele.nativeElement.querySelector('#prev');
    const next = this.ele.nativeElement.querySelector('#next');
    // current index on slider
    let currentIndex = 0;
    // get the width of image
    const size = sliderImages[0].clientWidth;

    //  slides the image to -ve x-axis
    sliderContainer.style.transform = 'translateX('+ (-size*currentIndex) + 'px)';
    sliderContainer.style.transition = 'transform 0.8s ease-in-out'

    // sliderImages.forEach(image => {
      
    // });

    prev.addEventListener('click', () => {
        if(currentIndex <= 0) {
          currentIndex=3
        }
        currentIndex--;
        sliderContainer.style.transform = 'translateX('+ (-(size * currentIndex*4)) + 'px)';
    });

    next.addEventListener('click', () => {
      // sliderContainer.style.transition = 'transform 0.5s ease-in-out';
      currentIndex = currentIndex+1;
      if(currentIndex>3){
        currentIndex = 0;
      }
      
      sliderContainer.style.transform = 'translateX('+ (-(size * currentIndex*4))   + 'px)';
    });
  }

  ngAfterViewInit(){

  }

  
}
