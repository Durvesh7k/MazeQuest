import { createContext, useState } from "react";
import { directions, initialMaze, sleep } from '../components/constants'

export const DataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const [maze, setMaze] = useState(initialMaze);
    const [path, setPath] = useState([]);
    const [visited, setVisited] = useState(
        Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(false))
    );
    const start = [0, 0];
    const end = [9, 19];

    const [isRunning, setIsRunning] = useState(false);
    const [algorithm, setAlgorithm] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const isValid = (x, y) => {
        return (
            x >= 0 &&
            y >= 0 &&
            x < maze.length &&
            y < maze[0].length &&
            maze[x][y] === 0
        );
    };

    const resetVisited = () => {
        setVisited(
            Array(maze.length)
                .fill()
                .map(() => Array(maze[0].length).fill(false))
        );
        setPath([]);
    };

    const bfs = async () => {
        setAlgorithm('BFS');
        resetVisited();
        setIsRunning(true);

        const queue = [[...start, []]];
        const newVisited = [...visited];
        newVisited[start[0]][start[1]] = true;

        while (queue.length) {
            const [x, y, currentPath] = queue.shift();
            const newPath = [...currentPath, [x, y]];

            if (x === end[0] && y === end[1]) {
                setPath(newPath);
                setIsRunning(false);
                setIsSuccess(true);
                return;
            }

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValid(newX, newY) && !newVisited[newX][newY]) {
                    newVisited[newX][newY] = true; 
                    setVisited([...newVisited]); 
                    queue.push([newX, newY, newPath]);
                    await sleep(50);
                }
            }
        }

        setIsRunning(false);
    };


    const dfs = async () => {
        setAlgorithm('DFS');
        resetVisited();
        setIsRunning(true);
        const stack = [[...start, []]];
        const newVisited = [...visited];
        newVisited[start[0]][start[1]] = true;

        while (stack.length) {
            const [x, y, currentPath] = stack.pop();
            const newPath = [...currentPath, [x, y]];

            if (x === end[0] && y === end[1]) {
                setPath(newPath);
                setIsRunning(false);
                setIsSuccess(true);
                return;
            }

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValid(newX, newY) && !newVisited[newX][newY]) {
                    newVisited[newX][newY] = true;
                    setVisited([...newVisited]);
                    stack.push([newX, newY, newPath]);
                    await sleep(50);
                }
            }
        }

        setIsRunning(false);
    };

    const dijkstra = async () => {
        setAlgorithm('Dijkstra');
        resetVisited();
        setIsRunning(true);
        const distances = Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(Infinity));
        const previous = Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(null));
        const pq = [[0, ...start]];
        distances[start[0]][start[1]] = 0;

        while (pq.length) {
            pq.sort((a, b) => a[0] - b[0]);
            const [dist, x, y] = pq.shift();

            if (x === end[0] && y === end[1]) {
                const path = [];
                let current = [x, y];
                while (current) {
                    path.unshift(current);
                    current = previous[current[0]][current[1]];
                }
                setPath(path);
                setIsRunning(false);
                setIsSuccess(true);
                return;
            }

            if (dist > distances[x][y]) continue;

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValid(newX, newY)) {
                    const newDist = dist + 1;
                    if (newDist < distances[newX][newY]) {
                        distances[newX][newY] = newDist;
                        previous[newX][newY] = [x, y];
                        pq.push([newDist, newX, newY]);
                        const newVisited = [...visited];
                        newVisited[newX][newY] = true;
                        setVisited(newVisited);
                        await sleep(50);
                    }
                }
            }
        }

        setIsRunning(false);
    };

    const aStar = async () => {
        setAlgorithm('A*');
        resetVisited();
        setIsRunning(true);
        const heuristic = (x, y) =>
            Math.abs(x - end[0]) + Math.abs(y - end[1]);
        const gScore = Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(Infinity));
        const fScore = Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(Infinity));
        const cameFrom = Array(maze.length)
            .fill()
            .map(() => Array(maze[0].length).fill(null));
        const openSet = [[...start, 0]];
        gScore[start[0]][start[1]] = 0;
        fScore[start[0]][start[1]] = heuristic(...start);

        while (openSet.length) {
            openSet.sort((a, b) => a[2] - b[2]);
            const [x, y] = openSet.shift();

            if (x === end[0] && y === end[1]) {
                const path = [];
                let current = [x, y];
                while (current) {
                    path.unshift(current);
                    current = cameFrom[current[0]][current[1]];
                }
                setPath(path);
                setIsRunning(false);
                setIsSuccess(true);
                return;
            }

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValid(newX, newY)) {
                    const tentativeGScore = gScore[x][y] + 1;
                    if (tentativeGScore < gScore[newX][newY]) {
                        cameFrom[newX][newY] = [x, y];
                        gScore[newX][newY] = tentativeGScore;
                        fScore[newX][newY] = gScore[newX][newY] + heuristic(newX, newY);
                        if (!openSet.some(([oX, oY]) => oX === newX && oY === newY)) {
                            openSet.push([newX, newY, fScore[newX][newY]]);
                        }
                        const newVisited = [...visited];
                        newVisited[newX][newY] = true;
                        setVisited(newVisited);
                        await sleep(50);
                    }
                }
            }
        }

        setIsRunning(false);
    };

    return (
        <DataContext.Provider value={{maze, path, visited, start, end, setMaze, setVisited, setPath, 
            algorithm, bfs, dfs, dijkstra, aStar, isSuccess, isRunning}}>
            {children}
        </DataContext.Provider>
    )
}