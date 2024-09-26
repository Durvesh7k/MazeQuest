import React from 'react';

const Button = ({ onClick, children, color }) => (
    <button
        className={`bg-blue-800 font-sans font-semibold h-max w-18 md:h-12 md:w-24 
        text-white text-xs md:text-sm py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
