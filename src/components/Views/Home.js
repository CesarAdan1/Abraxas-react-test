import React, { useState } from 'react';
import { SelectTime, TaskItem } from '../common';
import {TaskContainer} from '../containers/TaskContainer'

const Home = () => {
    return (
        <div>
            <TaskContainer>
                <TaskItem
                    taskName="Hacer Ejercicio"
                    taskDescription="Realizar ejercicio"
                    selectItem={
                        <SelectTime
                            titleNameLabelSelect="Selecciona un horario"
                        />
                    }
                />
            </TaskContainer>
        </div>
    )
}

export default Home;

