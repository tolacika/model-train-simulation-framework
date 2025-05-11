export interface SimulationOptions {
    layout?: any;
    trackComponents?: TrackComponent[];
    containerId: string;
    config?: Partial<SimulationConfig>;
}

export interface SimulationConfig {
    backgroundColor: string;
    trackBaseColor: string;
}

export enum TrackType {
    STRAIGHT = "Straight",
    CURVE = "Curve",
    CROSSING = "Crossing",
    CROSSING_SWITCH = "Crossing Switch",
    THREE_WAY_SWITCH = "Three Way Switch",
    SWITCH = "Switch",
}

export interface TrackComponent {
    partNumber: string;
    type: TrackType;
    length?: number; // in mm
    radius?: number; // in mm
    curveAngle?: string; // e.g., "30°"
    orientation?: string; // e.g., "Right", "Left"
    crossingAngle?: string; // e.g., "22.5°"
}

export interface TrackConnection {
    
}

export interface TrackSection {
    id: string;
    components: TrackComponent[];
    connections: TrackConnection[];


}