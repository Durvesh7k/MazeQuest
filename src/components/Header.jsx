import React, { useState } from 'react'
import Button from './Button';
import { useContext } from 'react';
import { DataContext } from '../context/DataContextProvider';
import { genRateMaze } from './constants';

const Header = () => {
    const { setMaze, setVisited, setPath, bfs, dfs, dijkstra, aStar } = useContext(DataContext);
    const [algorithm, setAlgorithm] = useState("bfs");

    const visualize = () => {
        if (algorithm === "bfs") bfs();
        else if (algorithm === "dfs") dfs();
        else if (algorithm === "dijkstra") dijkstra();
        else if (algorithm === "aStar") aStar();
    }

    return (
        <div className='flex h-20 bg-sky-950 justify-between w-full'>
            <div className='font-semibold font-sans text-xl flex justify-center items-center text-white p-2 m-5'>
                <h2>MazeQuest</h2>
            </div>
            <div className="flex gap-3 m-5">
                <Button
                    onClick={() => {
                        const newMaze = genRateMaze();
                        setMaze(newMaze);
                        console.log(newMaze);
                        setVisited(Array(newMaze.length).fill().map(() => Array(newMaze[0].length).fill(false)));
                        setPath([]);
                    }}
                    color="purple"
                >
                    Generate Maze
                </Button>
                <select onChange={(e) => {
                    setAlgorithm(e.target.value);
                }} className='bg-blue-800 cursor-pointer border-none font-sans font-semibold 
                h-8 w-16 md:h-12 md:w-28 text-white text-sm py-1 px-2 md:py-2 md:px-4 rounded hover:bg-blue-700
                 transition-colors duration-300 '>
                    <option className='border-none' value="bfs">BFS</option>
                    <option className='border-none' value="dfs">DFS</option>
                    <option className='border-none' value="dijkstra">Dijkstra</option>
                    <option className='border-none' value="aStar">A*</option>
                </select>
                <Button onClick={visualize}>
                    Visualize
                </Button>
            </div>

        </div>
    )
}

export default Header