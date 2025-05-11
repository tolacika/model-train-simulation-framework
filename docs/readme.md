## 🚂 Model Railway Control Simulation

---

### 🌟 Goal

Develop a modular, browser-based simulation framework for modeling train movement and control logic on a model LGB train set. The simulation is optimized for visual presentation (e.g., stage projection) and control prototyping. It emphasizes flexibility, extendability, and conceptual fidelity rather than realism.

---

### 🧩 Core Concepts

#### 🗸️ Layout

* Defined as a graph of track blocks (sections) with static connections.
* JSON-based layout definition.
* Each section includes coordinates for rendering, connection IDs, signal state, and occupancy.

#### 🚆 Trains

* Each train occupies one section at a time.
* Movement is abstracted as time-delayed transitions between connected sections.
* Multiple trains can run concurrently.
* Train logic controlled by individual finite-state machines (e.g., XState, or alternative FSMs).

#### 🎛️ Section Controllers

* Each section is managed by a logical controller.
* Responsibilities include occupancy tracking, signal state changes, and reacting to sensors or push-button triggers.
* Controllers are modular and FSM-based (library TBD).

#### 🚦 Signals

* Simple red/green/off indicator per section.
* Driven by section controller logic.
* Used to represent section state and safe movement.

#### 🧠 Logic Modeling

* State machines model control logic per train and per section.
* FSM library is flexible and open to change (e.g., XState or in-house model).
* Emphasis on modularity and testability.

---

### 🖥️ Rendering & UI

* Uses raw HTML5 Canvas.
* Fullscreen, responsive layout.
* Conceptual rendering only:

  * Tracks: Lines between section positions.
  * Sections: Circles or blocks, color-coded by state.
  * Trains: Markers rendered in current section.
  * Signals: Simple light indicators.
* User interaction via emulated controls:

  * Off-canvas floating buttons.

---

### 🔁 Simulation Engine

* Simulation loop architecture needs to be defined.
* Will handle per-frame updates for logic and rendering.
* Designed to support flexible timing, event scheduling, and modular logic evaluation.

---

### 📄 Data Structures 

* Tracks
* Sections
* Trains
* Layout

---

### 🔧 Extensibility

* Designed as a modular, scalable simulation layer.
* Logic layer and rendering layer are separated.
* Layouts and controller logic are configurable from external files or modules.
* Future integration paths:

  * Web Serial/WebSocket for physical hardware testing and for simulation for relays/switches.

---

### 🧪 Use Case

* Simulate the movement and control of an LGB model train layout.
* Provide a visually clear output suitable for projection or demos.
* Allow experimentation with train control logic before building hardware.

---

### 📦 Summary

This framework serves as a control logic and visualization platform for model railways, using browser-native technologies. It is conceptually simple, modular, hardware-agnostic, and geared toward presentation and prototyping.
