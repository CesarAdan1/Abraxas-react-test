import React, { useState } from 'react';
import {ModalEdit} from '../common/modal/ModalEdit';
import {TimeArea} from './TimeArea';
export function TaskItem({
    taskName, taskDescription, timeTask,
    openModalEdit, openModalDelete, selectItem
}) {

    const date = new Date();

    return (
        <div className="flex padding-cont width border-bottom margin-item">
            <div className="flex column-flex margin-sides">
                <div>
                    <label className="label">Tarea</label>
                    <div className="marginTop">
                        <span>
                            {taskName}
                        </span>
                    </div>
                </div>
                <div>
                    <label className="label">Descripción</label>
                    <div className="marginTop">
                        <span>
                            {taskDescription}
                        </span>
                    </div>
                </div>
            </div>
            <div className="margin-sides flex left-orientation">
                {<TimeArea/>}
            </div>
            <div className="margin-sides">
                <div>
                    <label className="label text-center">Duración</label>
                    <div className="marginTop">
                        <span className="pointer">
                            {selectItem}
                        </span>
                    </div>
                </div>
            </div>
            <div className="margin-sides">
                <div className="flex column-flex">
                    <label className="label text-center">Opciones</label>
                    <div className="marginTop flex column-flex center-text">
                        <div onClick={openModalEdit} className="marginTop margin-sides edit pointer">
                            <span className="button-text center-text">
                                Editar
                            </span>
                        </div>
                        <div onClick={openModalDelete} className="margin-sides delete pointer">
                            <span className="button-text center-text">
                                Eliminar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

