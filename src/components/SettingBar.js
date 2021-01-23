import React from 'react';

const SettingBar = () => {
    return (
        <div className='toolbar'>
            <label className="line-width">Толщина линии 
                <input
                    className="input-number"
                    type="number" 
                    defaultValue={1}
                    min={1} max={50}
                />
            </label>
        </div>
    );
};

export default SettingBar;