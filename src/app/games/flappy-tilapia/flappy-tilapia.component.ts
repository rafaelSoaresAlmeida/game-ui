import { AfterViewInit, Component } from '@angular/core';
import { FlappyTilapiaConfig } from './flappy-tilapia.config';

@Component({
  selector: 'app-flappy-tilapia',
  imports: [],
  templateUrl: './flappy-tilapia.component.html',
  styleUrl: './flappy-tilapia.component.css',
})
export class FlappyTilapiaComponent implements AfterViewInit {
  private phaserGame: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.phaserGame.destroy();
  }

  ngAfterViewInit(): void {
    this.phaserGame = new Phaser.Game(FlappyTilapiaConfig.sceneConfig);
  }
}
