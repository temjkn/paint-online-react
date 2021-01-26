import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../style/canvas.scss';
import Brush from '../Tools/Brush';

// observer - следит ща изменения стейта и перерисовывает при изменении

const Canvas = observer(() => {
    const canvasRef = useRef()
    useEffect(
        ()=>{
            canvasState.setCanvas(canvasRef.current)
            toolState.setTool(new Brush(canvasRef.current))
        }
        , []
    )
    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL()) //записываю снимки canvas для возможности отмены действий
    }

    return (
        <div className="canvas">
            <canvas onMouseDown = {() => mouseDownHandler()} ref={canvasRef} width={600} height={400}></canvas>
        </div>
    );
});

export default Canvas;