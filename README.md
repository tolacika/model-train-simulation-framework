# Model Train Simulation Framework

A modular, TypeScript-based simulation framework for modeling the **control logic and movement of multiple trains** across a digital/analog hybrid **model railway layout**. Built for the **browser**, with a Redux-based architecture, XState state machines, and HTML5 Canvas rendering.

---

## ✨ Features

* 🧠 **State Machines** for train and controller logic (via XState)
* ⚙️ **Redux Toolkit** for scalable, normalized state management
* 🎮 Simulated **user controls** for start/stop/reroute
* 🚦 Signal and relay simulation with section controllers
* 🖼️ Efficient **Canvas-based rendering** loop
* 📦 Designed as a reusable **npm package**

---

## 📦 Installation

Install via npm:

```bash
npm install model-train-sim
```

Or use locally in a monorepo (see [Local Development](#local-development)).

---

## 🔧 Usage Example

```ts
import { createSimulation } from 'model-train-sim';
import layoutJson from './layout.json';

const sim = createSimulation({ layout: layoutJson });
sim.start();

// Dispatch control events
sim.dispatch({ type: 'TRAIN_START', trainId: 'A' });
```

---

## 📁 Package Structure

```
src/
├── core/               # Simulation logic & state machines
├── state/              # Redux slices & store
├── render/             # Canvas drawing utils
├── ui/                 # Native controls (optional)
└── index.ts            # Entry point
```

---

## 🛠️ Local Development

Use in a monorepo:

```bash
my-sim-project/
├── packages/
│   └── model-train-sim/       # This framework
├── apps/
│   └── example-sim-ui/        # Your simulation UI
└── package.json               # With workspaces
```

In the root `package.json`:

```json
{
  "workspaces": ["packages/*", "apps/*"]
}
```

Link and develop locally:

```bash
cd packages/model-train-sim
npm run build --watch
```

---

## 🚂 Concepts

* **Trains**: Move between fixed sections with delayed transitions
* **Sections**: Track blocks (nodes in graph), may be occupied
* **Controllers**: Simulated logic blocks that respond to sensors
* **Signals**: Visual state feedback (stop/go/etc)

---

## 🔮 Future Integration

The architecture supports future plug-ins for:

* 🛠️ Hardware control (e.g., Arduino or logic gates)
* 🧲 Real sensors and relays
* 📡 Remote control panels

---

## 📄 License

MIT License. Created by \Laszlo Toth <Tolacika>.

---

## 📬 Contributions

Feel free to open issues, pull requests, or suggestions for expansion.
