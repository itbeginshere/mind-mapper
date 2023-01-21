import { useState, useCallback, useMemo } from 'react';
import ReactFlow, { Controls, Background, Node, Edge, applyEdgeChanges, applyNodeChanges, NodeChange, EdgeChange, addEdge, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './components/system/SideBar';
import TextUpdaterNode from './components/TextUpdaterNode';

const initialNodes : Array<Node> = [];
const initialEdges : Array<Edge> = [];

function App() {

  const [nodes, setNodes] = useState<Array<Node>>(initialNodes);
  const [edges, setEdges] = useState<Array<Edge>>(initialEdges);

  const onNodesChange = useCallback((changes: Array<NodeChange>) => 
    setNodes((prev) => applyNodeChanges(changes, prev)
  ), []);

  const onEdgesChange = useCallback((changes : Array<EdgeChange>) => 
    setEdges((prev) => applyEdgeChanges(changes, prev)
  ), [])
  
  const onConnect = useCallback((params: Edge | Connection) => 
    setEdges((eds) => addEdge(params, eds)
  ), []);

  const nodeTypes = useMemo(() => ({ 'textUpdater' : TextUpdaterNode}), []);

  return (
    <div className={'flex flex-row h-full'}>
      <Sidebar />
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
