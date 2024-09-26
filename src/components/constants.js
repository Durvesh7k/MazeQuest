export const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

export const initialMaze = [
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
];


export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const genRateMaze = () => {
    const rows = 10;
    const cols = 20;

    const maze = Array.from({ length: rows }, () => Array(cols).fill(1));

    function carve(x, y) {
        const directions = [
            [0, 2], [2, 0], [0, -2], [-2, 0]
        ].sort(() => Math.random() - 0.5);

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && maze[nx][ny] === 1) {
                maze[nx][ny] = 0;
                maze[x + dx / 2][y + dy / 2] = 0;
                carve(nx, ny);  
            }
        }
    }

    const startX = 1; 
    const startY = 1;
    maze[startX][startY] = 0;
    carve(startX, startY);

    maze[0][1] = 0; 
    maze[rows - 1][cols - 2] = 0; 
    maze[rows - 1][cols - 1] = 0; 


    for (let i = 1; i < rows - 1; i++) {
        if (i % 2 === 1) {
            maze[i][cols - 1] = 0;
        }
    }
    for (let j = 1; j < cols - 1; j++) {
        if (j % 2 === 1) {
            maze[rows - 1][j] = 0; 
        }
    }

    return maze;
};


