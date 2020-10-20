import React from 'react';
import GGEditor, { Flow ,EditableLabel } from 'gg-editor';

import "./styles.css";
const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

function App() {
  return (
    <GGEditor className="editor">
      <Flow
        className="editorBd"
        data={data}
        graphConfig={{
          defaultNode: {
            shape: "bizFlowNode"
          },
          defaultEdge: {
            shape: "bizFlowEdge"
          }
        }}
      />
      <EditableLabel />
    </GGEditor>
  );
}

export default App;