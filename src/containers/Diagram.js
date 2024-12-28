import React, { useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from "react-flow-renderer";
import Sidebar from "../components/Sidebar";

const initialNodes = [
  { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 100 } },
];

const initialEdges = [];

const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleAddNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar addNode={handleAddNode} />
      <div style={{ flex: 1, height: "100%" }}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={handleConnect}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default Diagram;
