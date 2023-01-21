import { useCallback, useMemo } from 'react';
import ReactFlow, { Controls, Background, Edge, applyEdgeChanges, applyNodeChanges, NodeChange, EdgeChange, addEdge, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import { EdgeReduxActions } from '../../redux/edge/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { NodeReduxActions } from '../../redux/node/actions';
import TextUpdaterNode from '../TextUpdaterNode';

function MainPlain() {

  const nodes = useAppSelector(x => x.nodeState.list);
  const edges = useAppSelector(x => x.edgeState.list);

  const dispatch = useAppDispatch();

  const onNodesChange = useCallback((changes: Array<NodeChange>) => 
    dispatch(NodeReduxActions.setList(applyNodeChanges(changes, nodes))
  ), [nodes]);

  const onEdgesChange = useCallback((changes : Array<EdgeChange>) => 
    dispatch(EdgeReduxActions.setList(applyEdgeChanges(changes, edges))
  ), [edges])
  
  const onConnect = useCallback((params: Edge | Connection) => 
      dispatch(EdgeReduxActions.setList(addEdge(params, edges))
  ), [edges]);

  const nodeTypes = useMemo(() => ({ 'textUpdater' : TextUpdaterNode}), []);

  return (
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
  )
}

export default MainPlain;
