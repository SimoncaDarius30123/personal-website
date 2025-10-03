import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, FaIconComponent],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  
  isScrolled = false;
  faBars = faBars;
  isClicked = false;
  
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 99;
  }

  showMobileMenu(){
    this.isClicked = !this.isClicked;
  }

}
