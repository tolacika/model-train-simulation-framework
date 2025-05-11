import { SimulationConfig, SimulationOptions } from "./types";
import { defaultSimulationConfig } from "./defaults";

export default class Simulation {
    private container: HTMLElement | null;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private config: SimulationConfig;
    private layout: any;

    constructor(options: SimulationOptions) {
        this.config = Object.assign({}, defaultSimulationConfig, options.config);

        this.container = document.getElementById(options.containerId);
        if (!this.container) {
            throw new Error(`Container element with ID "${options.containerId}" not found`);
        }

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d')!;
        this.container.appendChild(this.canvas);

        // Store layout for future use
        this.layout = options.layout;

        this.renderLoop();
        window.addEventListener('resize', () => this.renderLoop());
    }

    private renderBackground() {
        this.ctx.fillStyle = this.config.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private renderTracks() {
        this.ctx.strokeStyle = '#ffffff'; // Track color
        this.ctx.lineWidth = 4;
        
        let i = 0;
        
    }

    private renderLoop() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.renderBackground();
        
        this.renderTracks();
    }

    public start() {
        console.log('Simulation started');

        // Initialize canvas size and render
        this.renderLoop();
        window.addEventListener('resize', () => this.renderLoop());
    }

    public dispatch(action: any) {
        console.log('Dispatching action:', action);
        // Handle actions (e.g., TRAIN_START, TRAIN_STOP, etc.)
    }
}