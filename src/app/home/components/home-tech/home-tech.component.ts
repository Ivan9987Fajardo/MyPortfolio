import { Component } from '@angular/core';
import {
  faAngular,
  faBootstrap,
  faCcStripe,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { stringTranslation } from '../../../../assets/string';

@Component({
  selector: 'home-tech',
  templateUrl: './home-tech.component.html',
  styleUrl: './home-tech.component.scss',
})
export class HomeTechComponent {
  items = [
    {
      icon: faAngular,
      name: 'Angular',
    },
    {
      icon: faBootstrap,
      name: 'Bootstrap',
    },
    {
      icon: faHtml5,
      name: 'HTML5',
    },
    {
      icon: faCss3,
      name: 'Scss/Css',
    },
    {
      icon: faJs,
      name: 'Javascript',
    },
    {
      icon: faNodeJs,
      name: 'NodeJs',
    },
    {
      icon: faPhp,
      name: 'PHP',
    },
    {
      icon: faCode,
      name: 'VS Code',
    },
    {
      icon: faDatabase,
      name: 'MySql',
    },
    {
      icon: faDatabase,
      name: 'MSSql',
    },
  ];

  stringTranslation = stringTranslation;
}
