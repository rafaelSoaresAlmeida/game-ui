import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, BadgeModule, CommonModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-refresh',
        command: () => {
          this.router.navigateByUrl('/home');
        },
      },
      {
        label: 'Games',
        items: [
          {
            label: '<span class="text-xl font-bold">Dino</span>',
            escape: false,
            icon: 'pi pi-refresh',
            iconClass: 'text-xl',
            command: () => {
              this.router.navigateByUrl('/dino');
            },
          },
          {
            label: '<span class="text-xl font-bold">Flappy Tilapia</span>',
            escape: false,
            icon: 'pi pi-times',
            iconClass: 'text-xl',
            command: () => {
              this.router.navigateByUrl('/tilapia');
            },
          },
          {
            label: '<span class="text-xl font-bold">Space Invaders</span>',
            escape: false,
            icon: 'pi pi-times',
            iconClass: 'text-xl',
            command: () => {
              this.router.navigateByUrl('/spaceInvaders');
            },
          },
          {
            label: '<span class="text-xl font-bold">Tetris</span>',
            escape: false,
            icon: 'pi pi-times',
            iconClass: 'text-xl',
            command: () => {
              this.router.navigateByUrl('/tetris');
            },
          },
        ],
      },
    ];
  }
}
