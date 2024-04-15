/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import { Image2DCreator } from "../image-creator";

const initialNodes = [
  {
    id: "1",
    position: { x: 200, y: 200 },
    data: {
      label: (
        <>
          <Image2DCreator
            largura={60}
            altura={60}
            type={"items"}
            imagePath={"canivete.png"}
          />
        </>
      ),
    },
  },
  {
    id: "2",
    position: { x: 400, y: 200 },
    data: {
      label: (
        <>
          <Image2DCreator
            largura={60}
            altura={60}
            type={"items"}
            imagePath={"shotgun.png"}
          />
        </>
      ),
    },
  },
  {
    id: "3",
    position: { x: 600, y: 200 },
    data: {
      label: (
        <>
          <img
            className="w-[150px] h-[150px]"
            src="./src/assets/character/2D/personagemKAKI.png"
            alt="Imagem"
          />
        </>
      ),
    },
  },
];
const initialEdges = [{ id: "e1-1", source: "2", target: "3" }];

const Main = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-[100%] h-[100vh] p-12">
      <ReactFlow
        className="border-2 rounded-md border-slate-100"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Main;
