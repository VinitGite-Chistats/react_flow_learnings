import React from 'react'
import { Background, ReactFlow, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const SimpleOne = () => {
    const nodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: { label: 'This is node 1' }
        },
        {
            id: '2',
            position: { x: 0, y: 100 },
            data: { label: 'This is node 2' }
        },
        {
            id: '3',
            position: { x: 0, y: 200 },
            data: { label: 'This is node 3' }
        }
    ]

    const edges = [
        {
            id: '1-2',
            source: '1',
            target: '2',
            label: 'To the step'
        },
        {
            id: '2-3',
            source: '2',
            target: '3',
            label: 'To the step'
        }
    ]
    return (
        <div className='h-full'>
            <ReactFlow nodes={nodes} edges={edges}>
                <Background variant='dots' />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default SimpleOne