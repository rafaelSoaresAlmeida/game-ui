export class Tilapia extends Phaser.GameObjects.Sprite {
  declare body: Phaser.Physics.Arcade.Body;
  private jumpKey: Phaser.Input.Keyboard.Key;
  private isDead: boolean;
  private isFlapping: boolean;

  public getDead(): boolean {
    return this.isDead;
  }

  public setDead(dead: any): void {
    this.isDead = dead;
  }

  constructor(params: any) {
    super(params.scene, params.x, params.y, params.key, params.frame);

    // sprite
    this.setScale(3);
    this.setOrigin(0, 0);

    // variables
    this.isDead = false;
    this.isFlapping = false;

    // physics
    this.scene.physics.world.enable(this);
    this.body.setGravityY(1000);
    this.body.setSize(17, 12);

    // input
    if (this.scene.input.keyboard) {
      this.jumpKey = this.scene.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      );
    } else {
      throw new Error('Keyboard input is not available');
    }

    this.scene.add.existing(this);
  }

  override update(): void {
    // handle angle change
    if (this.angle < 30) {
      this.angle += 2;
    }

    // handle input
    if (this.jumpKey.isDown && !this.isFlapping) {
      // flap
      this.isFlapping = true;
      this.body.setVelocityY(-350);
      this.scene.tweens.add({
        targets: this,
        props: { angle: -20 },
        duration: 150,
        ease: 'Power0',
      });
    } else if (this.jumpKey.isUp && this.isFlapping) {
      this.isFlapping = false;
    }

    // check if off the screen
    if (this.y + this.height > this.scene.sys.canvas.height) {
      this.isDead = true;
    }
  }
}
