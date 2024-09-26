import React from 'react';

const Cell = ({ value, isPath, isVisited, isStart, isEnd }) => {
    let bgColor = 'bg-white';
    if (value === 1) bgColor = 'bg-gray-800';
    if (isVisited) bgColor = 'bg-blue-200';
    if (isPath) bgColor = 'bg-yellow-300';
    if (isStart) bgColor = 'bg-green-500';
    if (isEnd) bgColor = 'bg-red-500';

    return (
        <div
            className={`w-5 h-5 md:w-12 md:h-12  border border-gray-400 ${bgColor} transition-all duration-300 ease-in-out`}
        />
    );
};

export default Cell;
