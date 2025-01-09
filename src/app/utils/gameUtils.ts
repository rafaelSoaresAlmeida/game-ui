import { stringify } from 'querystring';
//import { Enemy } from '../games/space-invaders/actor/Enemy';

// Adapted from: http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect/1968345#1968345
export function intersects(
  p0_x: number,
  p0_y: number,
  p1_x: number,
  p1_y: number,
  p2_x: number,
  p2_y: number,
  p3_x: number,
  p3_y: number
) {
  var s1_x, s1_y, s2_x, s2_y;
  s1_x = p1_x - p0_x;
  s1_y = p1_y - p0_y;
  s2_x = p3_x - p2_x;
  s2_y = p3_y - p2_y;

  var s, t;
  s =
    (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) /
    (-s2_x * s1_y + s1_x * s2_y);
  t =
    (s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) /
    (-s2_x * s1_y + s1_x * s2_y);

  if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
    // Collision detected
    return 1;
  }

  return 0; // No collision
}

/* export function spawnSquadOfEnemies(
  count: number,
  ctx: CanvasRenderingContext2D
) {


  return spawnRowOfEnemies(20, ctx);
} */

/* function spawnRowOfEnemies(yOffSet: number, ctx: CanvasRenderingContext2D) {
  let enemies: Enemy[] = [];
  for (let i = 0; i < ctx.canvas.height / 20; i++) {
    if (Math.random() < 0.01) {
      enemies.push(
        new Enemy(ctx, i * 10 + i * 10, 10 + yOffSet, 10, 10, 'green', 500)
      );
    } else {
      enemies.push(
        new Enemy(ctx, i * 10 + i * 10, 10 + yOffSet, 10, 10, 'blue', 100)
      );
    }
  }

  return enemies;
} */

export function buildScoreObject(
  userName: String,
  userEmail: String,
  score: String,
  userGame: String
) {
  return {
    name: userName,
    email: userEmail,
    score: score,
    game: userGame,
  };
}

export function buildMessageObject(message: string, timer: number) {
  return {
    message: message,
    timer: timer,
  };
}

export function converToOrdinalNum(number: number) {
  let selector: number;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ['th', 'st', 'nd', 'rd', ''][selector];
}
