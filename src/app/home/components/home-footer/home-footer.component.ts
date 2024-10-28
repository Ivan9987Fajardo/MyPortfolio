import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { stringTranslation } from '../../../../assets/string';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.scss',
})
export class HomeFooterComponent {
  icons = {
    github: faGithub,
    linkedin: faLinkedin,
  };

  stringTranslation = stringTranslation;
}
