import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

export type PositionLoggerNodeData = {
  label?: string;
};

export type PositionLoggerNode = Node<PositionLoggerNodeData>;

export default function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.

    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">

      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type="source"
      className="w-2 h-2 bg-yellow-400 rounded-full"
      position={Position.Bottom} />
      
    </div>
  );
}
