import { AfterViewInit, Component } from '@angular/core';
import { DinoConfig } from './dino.config';

@Component({
  selector: 'app-dino',
  imports: [],
  templateUrl: './dino.component.html',
  styleUrl: './dino.component.css',
})
export class DinoComponent implements AfterViewInit {
  private phaserGame: any;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.phaserGame.destroy();
  }

  ngAfterViewInit(): void {
    this.phaserGame = new Phaser.Game(DinoConfig.sceneConfig);
  }
}
