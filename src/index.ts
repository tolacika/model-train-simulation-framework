import layoutJson from './layout';

const app = document.getElementById('app') as HTMLDivElement;
if (!app) {
    throw new Error('App element not found');
}

const canvas = document.createElement('canvas');
canvas.width = 800; 
canvas.height = 600;
canvas.style.border = '1px solid black';
app.appendChild(canvas);



//const sim = new Simulation(layoutJson);
//sim.start();
//sim.dispatch({ type: 'TRAIN_START', trainId: 'A' });

console.log('Application started');
