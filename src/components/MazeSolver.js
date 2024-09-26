import React from 'react';
import MazeGrid from './MazeGrid';
import Pseudocode from './pseudocode/Pseudocode';
import { DataContext } from '../context/DataContextProvider';
import { useContext } from 'react';

const MazeSolver = () => {
    const { maze, path, visited, start, end, algorithm, isSuccess, isRunning } = useContext(DataContext);

    return (
        <div className="p-5 max-w-3xl mx-auto">
            <div className="flex mb-5 justify-center">
                <MazeGrid
                    maze={maze}
                    path={path}
                    visited={visited}
                    start={start}
                    end={end}
                />
            </div>
            <div className='flex flex-col w-40 gap-4'>
                {isRunning && (
                    <div className='text-black text-wrap font-semibold'>
                        <h3>Algorithm in progress</h3>
                        <p>
                            Running {algorithm}... Please wait.
                        </p>
                    </div>
                )}
            </div>
            <div className='font-semibold'>
                {isSuccess && (
                    <Pseudocode algorithm={algorithm} />
                )}
            </div>
        </div>
    );
};

export default MazeSolver;
