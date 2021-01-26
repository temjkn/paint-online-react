import React from 'react';
import toolState from '../store/toolState';

const SettingBar = () => {

    const ChangeLineWidth = (number) =>{
        toolState.setLineWidth(number)
    }
    return (
        <div className='toolbar'>
            <label htmlFor = 'lineWidth'>толщина линии:
                <input id = 'lineWidth' type="number" defaultValue={toolState.lineWidth} min={1} max={100} onChange = { (e)=> ChangeLineWidth(e.target.value)}/>
            </label>
        </div>
    );
};

export default SettingBar;