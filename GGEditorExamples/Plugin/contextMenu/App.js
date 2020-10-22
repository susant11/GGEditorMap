import React from 'react';
import { Menu } from 'antd';
import GGEditor, { Flow, ContextMenu } from 'gg-editor';
//import styles from './index.less';

import "./styles.css";

const data = {
  nodes: [
    {
      id: '0',
      label: 'One',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Two',
      x: 50,
      y: 200,
    },
    {
      id: '2',
      label: 'three',
      x: 50,
      y: 400,
    },
  ],
  edges: [
    {
      label: 'Label1',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
    {
      label: 'Label2',
      source: '0',
      sourceAnchor: 0,
      target: '2',
      targetAnchor: 1,
    },
  ],
};

function App() {
  return (
    <GGEditor className="editor">
      <Flow className="editorBd" data={data} />
      <ContextMenu
        renderContent={(item, position, hide) => {
          const { x: left, y: top } = position;

          return (
            <div style={{ position: 'absolute', top, left }}>
              <Menu mode="vertical" selectable={false} onClick={hide}>
                <Menu.Item>Option 1</Menu.Item>
                <Menu.Item>Option 2</Menu.Item>
                <Menu.Item>Option 3</Menu.Item>
              </Menu>
            </div>
          );
        }}
      />
    </GGEditor>
  );
}

export default App;
