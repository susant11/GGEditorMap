import React from 'react';
import GGEditor, { Flow, RegisterNode } from 'gg-editor';
//import styles from './index.less';
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
        graphConfig={{ renderer: 'svg', defaultNode: { type: 'customDomNode' }, defaultEdge: { type: 'polyline' } }}
      />
      <RegisterNode
        name="customDomNode"
        config={{
          draw(model, group) {
            const { label } = model;

            const keyShape = group.addShape('rect', {
              draggable: true,
              attrs: {
                x: 0,
                y: 0,
                width: 150,
                height: 100,
                fill: '#5487ea',
                radius: 8,
              },
            });

            group.addShape('dom', {
              draggable: true,
              attrs: {
                x: 35,
                y: 0,
                width: 100,
                height: 100,
                html: `<h1 style="color: #ffffff; line-height: 50px"}>${label}</h1>`,
              },
            });

            return keyShape;
          },
          getAnchorPoints() {
            return [
              [0.5, 0],
              [0.5, 1],
              [0, 0.5],
              [1, 0.5],
            ];
          },
        }}
        extend="single-shape"
      />
    </GGEditor>
  );
}

export default App;
