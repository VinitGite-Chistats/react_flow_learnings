import React from 'react'
import { Background, ReactFlow, Controls} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const SimpleOne = () => {
    return (
        <div className='h-full'>
            <ReactFlow>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default SimpleOne