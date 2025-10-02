import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMe } from "./components/about-me/about-me";
import { MySkills } from "./components/my-skills/my-skills";
import { MyPortofolio } from "./components/my-portofolio/my-portofolio";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [NavBar, FontAwesomeModule, AboutMe, MySkills, MyPortofolio, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Resume');
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}
