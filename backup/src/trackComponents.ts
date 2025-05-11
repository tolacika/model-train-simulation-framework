import { TrackComponent, TrackType } from './simulation/types';

const trackComponents: TrackComponent[] = [
  // Straight Tracks
  { partNumber: "10000", type: TrackType.STRAIGHT, length: 300 },
  { partNumber: "10007", type: TrackType.STRAIGHT, length: 300 },
  { partNumber: "10040", type: TrackType.STRAIGHT, length: 41 },
  { partNumber: "10050", type: TrackType.STRAIGHT, length: 52 },
  { partNumber: "10070", type: TrackType.STRAIGHT, length: 75 },
  { partNumber: "10080", type: TrackType.STRAIGHT, length: 82 },
  { partNumber: "10090", type: TrackType.STRAIGHT, length: 88 },
  { partNumber: "10150", type: TrackType.STRAIGHT, length: 150 },
  { partNumber: "10152", type: TrackType.STRAIGHT, length: 150 },
  { partNumber: "10153", type: TrackType.STRAIGHT, length: 150 },
  { partNumber: "10560", type: TrackType.STRAIGHT, length: 150 },
  { partNumber: "10600", type: TrackType.STRAIGHT, length: 600 },
  { partNumber: "10610", type: TrackType.STRAIGHT, length: 1200 },

  // Curved Tracks
  { partNumber: "11000", type: TrackType.CURVE, radius: 600, curveAngle: "30°" },
  { partNumber: "11020", type: TrackType.CURVE, radius: 600, curveAngle: "15°" },
  { partNumber: "11040", type: TrackType.CURVE, radius: 600, curveAngle: "7.5°" },
  { partNumber: "11152", type: TrackType.CURVE, radius: 600, curveAngle: "15°" },
  { partNumber: "15000", type: TrackType.CURVE, radius: 780, curveAngle: "30°" },
  { partNumber: "16000", type: TrackType.CURVE, radius: 1195, curveAngle: "22.5°" },
  { partNumber: "18000", type: TrackType.CURVE, radius: 2320, curveAngle: "15°" },
  { partNumber: "18020", type: TrackType.CURVE, radius: 2320, curveAngle: "7.5°" },

  // Switches and Turnouts
  { partNumber: "12000", type: TrackType.SWITCH, orientation: "Right", length: 300, radius: 600, curveAngle: "30°" },
  { partNumber: "12050", type: TrackType.SWITCH, orientation: "Right", length: 300, radius: 600, curveAngle: "30°" },
  { partNumber: "12100", type: TrackType.SWITCH, orientation: "Left", length: 300, radius: 600, curveAngle: "30°" },
  { partNumber: "12150", type: TrackType.SWITCH, orientation: "Left", length: 300, radius: 600, curveAngle: "30°" },
  { partNumber: "12360", type: TrackType.THREE_WAY_SWITCH, length: 375, radius: 600, curveAngle: "30°" },
  { partNumber: "16040", type: TrackType.SWITCH, orientation: "Right", length: 440, radius: 1195, curveAngle: "22.5°" },
  { partNumber: "16050", type: TrackType.SWITCH, orientation: "Right", length: 440, radius: 1195, curveAngle: "22.5°" },
  { partNumber: "16140", type: TrackType.SWITCH, orientation: "Left", length: 440, radius: 1195, curveAngle: "22.5°" },
  { partNumber: "16150", type: TrackType.SWITCH, orientation: "Left", length: 440, radius: 1195, curveAngle: "22.5°" },
  { partNumber: "18040", type: TrackType.SWITCH, orientation: "Right", length: 600, radius: 2320, curveAngle: "15°" },
  { partNumber: "18050", type: TrackType.SWITCH, orientation: "Right", length: 600, radius: 2320, curveAngle: "15°" },
  { partNumber: "18140", type: TrackType.SWITCH, orientation: "Left", length: 600, radius: 2320, curveAngle: "15°" },
  { partNumber: "18150", type: TrackType.SWITCH, orientation: "Left", length: 600, radius: 2320, curveAngle: "15°" },

  // Crossings and Special Tracks
  { partNumber: "13000", type: TrackType.CROSSING, length: 300, crossingAngle: "30°" },
  { partNumber: "13100", type: TrackType.CROSSING, length: 150, crossingAngle: "90°" },
  { partNumber: "13200", type: TrackType.CROSSING, length: 375, crossingAngle: "22.5°" },
  { partNumber: "12260", type: TrackType.CROSSING_SWITCH, length: 375, radius: 780, curveAngle: "22.5°" },
];

export default trackComponents;