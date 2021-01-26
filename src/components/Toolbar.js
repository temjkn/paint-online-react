import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../style/toolbar.scss';
import Brush from '../Tools/Brush';
import Circle from '../Tools/Circle';
import Rect from '../Tools/Rect';
import Eraser from '../Tools/Eraser';
import Line from '../Tools/Line';

const Toolbar = () => {
    const ChangeFillColor = (color) =>{
        toolState.setFillColor(color)
    }
    const ChangeStrokeColor = (color) =>{
        toolState.setStrokeColor(color)
    }

    return (
        <div className='toolbar'>
            <div className='toolbar__left'>
                <button className='toolbar__btn brush' onClick = { ()=> toolState.setTool(new Brush(canvasState.canvas))}></button>
                <button className='toolbar__btn rect' onClick = { ()=> toolState.setTool(new Rect(canvasState.canvas))}></button>
                <button className='toolbar__btn circle' onClick = { ()=> toolState.setTool(new Circle(canvasState.canvas))}></button>
                <button className='toolbar__btn eraser' onClick = { ()=> toolState.setTool(new Eraser(canvasState.canvas))}></button>
                <button className='toolbar__btn line' onClick = { ()=> toolState.setTool(new Line(canvasState.canvas))}></button>
                <label htmlFor = 'fillColor'>Цвет заливки:</label>
                <input id = 'fillColor' type='color' defaultValue={toolState.fillColor} onChange = { (e)=> ChangeFillColor(e.target.value)}/>
                <label htmlFor = 'strokeColor'>Цвет линии:</label>
                <input id = 'strokeColor' type='color' defaultValue={toolState.strokeColor} onChange = { (e)=> ChangeStrokeColor(e.target.value)}/>
            </div>
            <div className='toolbar__right'>
                <button className='toolbar__btn undo' onClick = {()=> canvasState.undo()}></button>
                <button className='toolbar__btn redo' onClick = {()=> canvasState.redo()}></button>
                <button className='toolbar__btn save'></button>
            </div>
        </div>
    );
};

export default Toolbar;