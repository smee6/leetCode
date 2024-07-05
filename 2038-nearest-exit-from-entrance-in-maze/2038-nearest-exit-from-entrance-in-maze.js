/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let row = maze.length;
    let col = maze[0].length;
    let visited = maze.map((e) => e.map(() => false));

    let queue = [[entrance[0], entrance[1], 0]];

    visited[entrance[0]][entrance[1]] = true;

    while (queue.length > 0) {
        let [x, y, depth] = queue.shift();

        for (let [dx, dy] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
            if (maze[nx][ny] === '+' || visited[nx][ny]) continue;

            if ((nx === 0 || ny === 0 || nx === row - 1 || ny === col - 1) && !(nx === entrance[0] && ny === entrance[1])) {
                return depth + 1;
            }

            visited[nx][ny] = true;
            queue.push([nx, ny, depth + 1]);
        }
    }

    return -1;
};