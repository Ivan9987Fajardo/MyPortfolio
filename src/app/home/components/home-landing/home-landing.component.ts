import { Component, OnInit } from '@angular/core';
import { ParticlesJsConfig } from '../../../../assets/paticlejs.config';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faEnvelope,
  faFile,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { stringTranslation } from '../../../../assets/string';

declare let particlesJS: any;

@Component({
  selector: 'home-landing',
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent implements OnInit {
  faCode = faCode;

  links = [
    {
      name: 'Github',
      icon: faGithub,
      url: 'https://github.com/Ivan9987Fajardo',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/john-ivan-fajardo-803955188/',
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:john.fajardo@pyrotech.website',
    },
    {
      name: 'Resume',
      icon: faFile,
      url: 'assets/resume.pdf',
    },
  ];

  stringTranslation = stringTranslation;

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesJsConfig, function () {});
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  ngOnInit(): void {
    this.invokeParticles();
  }
}
