


import * as tf from '@tensorflow/tfjs';




// export interface DetectedObject {
//   bbox: [number, number, number, number];  // [x, y, width, height]
//   class: string;
//   score: number;
// }

export interface BoundingBox {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}