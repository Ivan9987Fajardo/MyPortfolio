import { Component, OnInit } from '@angular/core';
import { ParticlesJsConfig } from '../../../../assets/paticlejs.config';
import {
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { stringTranslation } from '../../../../assets/string';
import { socLinks } from '../../../app.component';

declare let particlesJS: any;

@Component({
  selector: 'home-landing',
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent implements OnInit {
  faCode = faCode;

  links = socLinks

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
