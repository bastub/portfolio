import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { Transform } from 'stream';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltipModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('hamburgerX', [
      state('hamburger', style({})),
      state(
        'topBar',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
        })
      ),
      state(
        'middleBar',
        style({
          opacity: 0,
        })
      ),
      state(
        'bottomBar',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isHamburger = true;
  onClick() {
    this.isHamburger = !this.isHamburger;
    const mobileMenu = document.querySelector('.header-menu');
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('header-mobile-menu-show');
    console.log('clicked');
  }
}
