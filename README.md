
# 🚂 Model Train Simulation

A modular, browser-based simulation framework for modeling train movement and control logic on a model LGB train set. This project is optimized for visual presentation (e.g., stage projection) and control prototyping. It emphasizes flexibility, extendability, and conceptual fidelity rather than realism.

## 🌟 Features

- **Graph-based Layouts**: Define track layouts as graphs of track blocks (sections) with static connections.
- **Train Simulation**: Simulate train movement with time-delayed transitions between sections.
- **Modular Controllers**: Manage sections with FSM-based controllers for occupancy tracking, signal state changes, and more.
- **Signal System**: Visualize section states with simple red/green/off indicators.
- **Canvas Rendering**: Render layouts and train states using HTML5 Canvas.
- **Extensibility**: Modular architecture for easy customization and future hardware integration.

## 📂 Documentation

Detailed documentation is available in the `docs` folder:

- [Core Concepts](docs/readme.md#-core-concepts): Learn about layouts, trains, section controllers, and signals.
- [Track System](docs/tracks.md): Explore the LGB G-scale track system, including dimensions, types, and layout geometries.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/model-train-sim.git
   cd model-train-sim
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 🚀 Usage

1. Define your layout in the [`src/layout.ts`](src/layout.ts) file.
2. Start the simulation by running the development server.
3. Interact with the simulation through the browser interface.

## 📄 Project Structure

- **`src/`**: Contains the main source code.
  - [`index.ts`](src/index.ts): Entry point for the application.
  - [`layout.ts`](src/layout.ts): Placeholder for layout configuration.
- **`docs/`**: Documentation files.
  - [`readme.md`](docs/readme.md): Overview of core concepts.
  - [`tracks.md`](docs/tracks.md): Details about the LGB track system.
- **`dist/`**: Output directory for the built project (generated after running `npm run build`).

## 🔧 Configuration

- **TypeScript**: Configured via [`tsconfig.json`](tsconfig.json).
- **Vite**: Development server and build tool configured via [`vite.config.ts`](vite.config.ts).

## 🧩 Extensibility

This project is designed to be modular and scalable. You can extend it by:

- Adding new FSM-based controllers for sections or trains.
- Integrating Web Serial/WebSocket for hardware testing.
- Customizing the rendering logic in the simulation engine.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## 📦 Summary

This framework serves as a control logic and visualization platform for model railways, using browser-native technologies. It is conceptually simple, modular, hardware-agnostic, and geared toward presentation and prototyping.
