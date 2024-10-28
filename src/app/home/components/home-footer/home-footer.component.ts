import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { stringTranslation } from '../../../../assets/string';
import { socLinks } from '../../../app.component';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.scss',
})
export class HomeFooterComponent {
  links = socLinks

  stringTranslation = stringTranslation;

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
