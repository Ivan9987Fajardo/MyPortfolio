import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  resetSlider() {
    document.querySelector('#slider-landing')?.classList.remove('Active');
    document.querySelector('#slider-about')?.classList.remove('Active');
    document.querySelector('#slider-technologies')?.classList.remove('Active');
  }
  ngOnInit(): void {
  
    document.addEventListener('scroll', (ev) => {
      console.log(window.scrollY);
      
      if (window.scrollY < 911) {
        this.resetSlider();
        document.querySelector('#slider-landing')!.classList.add('Active');
      } else if (window.scrollY < 1491) {
        this.resetSlider();
        document.querySelector('#slider-about')!.classList.add('Active');
      } else if (window.scrollY < 2091) {
        this.resetSlider();
        document.querySelector('#slider-technologies')!.classList.add('Active');
      }
    });
  }
}
