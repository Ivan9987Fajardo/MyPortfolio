import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}

export const socLinks = [
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
    url: 'mailto:ivan9987fajardo@gmail.com',
  },
  {
    name: 'Resume',
    icon: faFile,
    url: 'assets/resume.pdf',
  },
];
