/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = [];

    for(i in rooms){
        visited.push(false)
    }    
    visited[0] = true;
    
    let stack = [0];
    
    while (stack.length > 0) {
        let currentRoom = stack.pop();
        rooms[currentRoom].forEach(key => {
            if (!visited[key]) {
                visited[key] = true;
                stack.push(key);
            }
        });
    }
    
    return visited.every(e => e == true);
};