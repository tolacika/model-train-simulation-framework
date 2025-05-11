import "./styles.css";
import layoutJson from './layout';
import trackComponents from './trackComponents'

import Simulation from "./simulation"

const sim = new Simulation({
    layout: layoutJson,
    trackComponents,
    containerId: 'app'
});
sim.start();
//sim.dispatch({ type: 'TRAIN_START', trainId: 'A' });

console.log('Application started');
