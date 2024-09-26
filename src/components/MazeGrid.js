import React from 'react';
import Cell from './Cell';

const MazeGrid = ({ maze, path, visited, start, end }) => {
    return (
        <div className="grid gap-0.5">
            {maze.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-0.5">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={cell}
                            isPath={path.some(([x, y]) => x === rowIndex && y === colIndex)}
                            isVisited={visited[rowIndex][colIndex]}
                            isStart={start[0] === rowIndex && start[1] === colIndex}
                            isEnd={end[0] === rowIndex && end[1] === colIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MazeGrid;
