import { AfterViewInit, Component } from '@angular/core';
import { BattleCityConfig } from './battlecity.config';

@Component({
  selector: 'app-battlecity',
  imports: [],
  templateUrl: './battlecity.component.html',
  styleUrl: './battlecity.component.css'
})
export class BattlecityComponent implements AfterViewInit {

  private phaserGame: any;

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.phaserGame.destroy();
  }

  ngAfterViewInit(): void {
    this.phaserGame = new Phaser.Game(BattleCityConfig.sceneConfig);
  }
}