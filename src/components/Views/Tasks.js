import React from 'react';
import { SelectTime } from '../common';

const Tasks = () => {
    return (
        <div className="flex flex-column marginTop margin-sides">
        <div className="flex width margin-sides">
            <h2 className="h2-highlight">Pendientes</h2>
            <div className="left-orientation">
                <SelectTime />
            </div>
        </div>
        <div></div>
    </div>
    )
}

export default Tasks;