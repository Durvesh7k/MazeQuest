import React from "react";

const Pseudocode = ({ algorithm }) => {
    const pseudocodeDijkstra = () => (
        <>
            <p className="ml-2">Dijkstra’s algorithm tries to find the shortest path from the starting node to every node. Hence, we can get the shortest path from the starting node to the goal.</p>
            <code className="ml-2 text-red-500">
                <ol className="list-decimal pl-5">
                    <li>Assign dis[v] for all nodes, v, as INT_MAX (distance from root node to every other node).</li>
                    <li>Assign dis[root] as 0 (distance from root node to itself).</li>
                    <li>Add all nodes to a priority queue.</li>
                    <li>Loop on the queue as long as it's not empty:</li>
                    <ol>
                        <li>In every loop, choose the node with the minimum distance from the root node in the queue (root node will be selected first).</li>
                        <li>Remove the current chosen node from the queue (vis[current] = true).</li>
                        <li>If the current chosen node is the goal node, then return it.</li>
                        <li>For every child of the current node, do the following:</li>
                        <ol>
                            <li>If child node is not already in the queue (already visited), then skip this iteration.</li>
                            <li>Assign temp = (dist[current] + distance from current to child node).</li>
                            <li>If temp {"<"} dist[child], then assign dist[child] = temp. This denotes a shorter path to the child node has been found.</li>
                        </ol>
                    </ol>
                    <li>If the priority queue is empty, then the goal node was not found!</li>
                </ol>
            </code>
        </>
    );

    const pseudocodeAStar = () => (
        <>
            <p className="ml-2">A* is a combination of Dijkstra and Greedy BFS. The algorithm uses distance from the root node plus heuristic distance to the goal. The algorithm terminates when the goal node is found.</p>
            <code className="ml-2 text-red-500">
                <ol className="list-decimal pl-5">
                    <li>Assign dis[v] for all nodes, v, as INT_MAX (distance from root node + heuristics of every node).</li>
                    <li>Assign dis[root] = 0 + heuristic(root, goal) (distance from root node to itself + heuristics).</li>
                    <li>Add the root node to priority queue.</li>
                    <li>Loop on the queue as long as it's not empty.</li>
                    <ol>
                        <li>In every loop, choose the node with the minimum distance from the root node in the queue + heuristic (root node will be selected first).</li>
                        <li>Remove the current chosen node from the queue (vis[current] = true).</li>
                        <li>If the current node is the goal node, then return it.</li>
                        <li>For every child of the current node, do the following:</li>
                        <ol>
                            <li>Assign temp = distance(root, current) + distance(current, child) + heuristic(child, goal).</li>
                            <li>If temp {"<"} dis[child], then assign dist[child] = temp. This denotes a shorter path to child node has been found.</li>
                            <li>Add child node to the queue if not already in the queue (thus, it's now marked as not visited again).</li>
                        </ol>
                    </ol>
                    <li>If the priority queue is empty, then the goal node was not found!</li>
                </ol>
            </code>
        </>
    );

    const pseudocodeBFS = () => (
        <>
            <p className="ml-2">Breadth-First Search starts at the root (i.e., start node) and explores all of its neighbours before moving to each of the root children. Then, it explores the children of the root children, and so on. The algorithm uses a queue to perform the BFS.</p>
            <code className="ml-2 text-red-500">
                <ol className="list-decimal pl-5">
                    <li>Add the start node to the queue and mark it as visited (i.e., already explored).</li>
                    <li>Loop on the queue as long as it's not empty:</li>
                    <ol>
                        <li>Get and remove the node at the front of the queue as the current node.</li>
                        <li>For every non-visited child of the current node, do the following:</li>
                        <ol>
                            <li>Mark it as visited.</li>
                            <li>Check if it's the goal node. If so, then return it.</li>
                            <li>Otherwise, push it to the queue.</li>
                        </ol>
                    </ol>
                    <li>If queue is empty, then goal node was not found!</li>
                </ol>
            </code>
        </>
    );

    const pseudocodeDFS = () => (
        <>
            <p className="ml-2">Depth-First Search starts at the root and explores one of its children’s subtree, and then moves to the next child’s subtree, and so on. It uses a stack, or recursion, to perform the search algorithm. The following is the iterative (i.e., stack) approach.</p>
            <code className="ml-2 text-red-500">
                <ol className="list-decimal pl-5">
                    <li>Add the start node to the stack.</li>
                    <li>Loop on the stack as long as it's not empty.</li>
                    <ol>
                        <li>Get the node at the top of the stack as the current node and mark it as visited.</li>
                        <li>For every non-visited child of the current node, do the following:</li>
                        <ol>
                            <li>Check if it's the goal node. If so, then return this child node.</li>
                            <li>Otherwise, push it to the stack.</li>
                        </ol>
                    </ol>
                    <li>If the stack is empty, then the goal node was not found!</li>
                </ol>
            </code>
        </>
    );

    const renderPseudocode = () => {
        switch (algorithm) {
            case "Dijkstra":
                return pseudocodeDijkstra();
            case "A*":
                return pseudocodeAStar();
            case "BFS":
                return pseudocodeBFS();
            case "DFS":
                return pseudocodeDFS();
            default:
                return <p className="ml-2">No pseudocode available for this algorithm.</p>;
        }
    };

    return (
        <div className="pseudocode mx-5 my-2">
            <h2 className="text-lg font-bold">{algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Algorithm</h2>
            {renderPseudocode()}
        </div>
    );
};

export default Pseudocode;
