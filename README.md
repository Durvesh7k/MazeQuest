# MazeQuest

**MazeQuest** is an interactive maze-solving visualizer built with **React** and **Tailwind CSS**. It supports various pathfinding algorithms such as **Dijkstra**, **Breadth-First Search (BFS)**, **Depth-First Search (DFS)**, and **A***. Users can create custom mazes on an interactive grid and visualize how these algorithms solve the maze step-by-step, along with detailed pseudocode for educational purposes.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Pathfinding Algorithms](#pathfinding-algorithms)
- [Challenges Faced](#challenges-faced)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Demo
Check out the live demo of MazeQuest [here](#).

## Features
- **Interactive Grid**: Users can create their own mazes by adding walls, start points, and end points.
- **Algorithm Visualizations**: Visualize multiple pathfinding algorithms including:
  - **Dijkstra's Algorithm**
  - **Breadth-First Search (BFS)**
  - **Depth-First Search (DFS)**
  - **A*** (A-Star)
- **Pseudocode Display**: For each algorithm, view the corresponding pseudocode to understand how it works.
- **Smooth Animations**: Pathfinding animations are optimized for performance and smoothness.
- **Reset and Replay**: Easily reset the maze or replay the algorithm on the same maze.
  
## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Durvesh7k/MazeQuest.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MazeQuest
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage
- **Creating a Maze**: Use the grid to click and place walls, start, and end points.
- **Select an Algorithm**: Choose a pathfinding algorithm from the dropdown menu.
- **Start Visualization**: Click the "Visualize" button to start the animation and see the algorithm in action.
- **Pseudocode**: Follow along with the algorithm by viewing the pseudocode that gets updated with each step.
  
## Technologies Used
- **React**: For building the user interface.
- **JavaScript**: Core programming logic.
- **Tailwind CSS**: For styling and responsive design.
- **CSS Animations**: To visualize the maze-solving process.
- **React State Management**: To handle the grid interactions and algorithm states.

## Pathfinding Algorithms
### Dijkstra's Algorithm
A weighted shortest path algorithm that explores all possible paths and guarantees finding the shortest one.

### Breadth-First Search (BFS)
An unweighted pathfinding algorithm that explores all nodes at the present "depth" before moving on to nodes at the next depth level.

### Depth-First Search (DFS)
An algorithm that explores as far as possible along each branch before backtracking.

### A* Search (A-Star)
An advanced weighted algorithm that uses heuristics to find the most promising path towards the goal.

## Challenges Faced
- **Optimizing Animation Performance**: Ensuring the smooth rendering of maze-solving animations without lag or delays was a significant challenge.
- **Algorithm Visualization**: It was important to make the step-by-step execution of algorithms clear to users while synchronizing the pseudocode display with the actual animation.

## Future Enhancements
- **Customizable Grid Sizes**: Allow users to change the size of the grid dynamically.
- **Algorithm Speed Controls**: Add controls for speeding up or slowing down the visualization.
- **Maze Generation**: Implement automated maze-generation algorithms like recursive backtracking.
- **Mobile Support**: Improve the design for better mobile responsiveness.
  
## Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a solid foundation for your project. Let me know if you'd like to add more specific sections or details!