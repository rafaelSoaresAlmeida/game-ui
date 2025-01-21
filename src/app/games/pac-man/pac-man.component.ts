import { Component } from '@angular/core';
import { PacManConfig } from './pac-man.config';

@Component({
  selector: 'app-pac-man',
  providers: [],
  templateUrl: './pac-man.component.html',
  styleUrl: './pac-man.component.css',
})
export class PacManComponent {
  private phaserGame: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.phaserGame.destroy();
  }

  ngAfterViewInit(): void {
    this.phaserGame = new Phaser.Game(PacManConfig.sceneConfig);
  }
}
