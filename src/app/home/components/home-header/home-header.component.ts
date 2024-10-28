import { Component, OnInit } from '@angular/core';
import { stringTranslation } from '../../../../assets/string';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent implements OnInit {
  stringTranslation = stringTranslation;

  ngOnInit(): void {
    const header = document.querySelector('.HomeHeader');
    document.addEventListener('scroll', (ev) => {
      if (header !== null) {
        if (window.scrollY === 0) {
          header.classList.remove('Active');
        } else {
          header.classList.add('Active');
        }
      }
    });
  }
}
