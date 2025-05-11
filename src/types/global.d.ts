export interface Train {
    id: string;
    name: string;
    type: string;
}

export interface Section {
    id: string;
    name: string;
    length: number;
    speedLimit: number;
    occupancy: boolean;
}