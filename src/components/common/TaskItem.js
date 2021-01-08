import React, { useState } from 'react';

export function TaskItem({
    taskName, taskDescription, timeTask,
    openModalEdit, openModalDelete, selectItem
}) {

    const [status, setStatus] = useState(true);

    function onClickChangePlayToPause() {
        setStatus(!status)
    }

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
                <div className="margin-sides">
                    <label className="label text-center">Acciones</label>
                    <div className="marginTop">
                        <span onClick={onClickChangePlayToPause}>
                            {status
                                ? <i title="Pausar" className="fas fa-play"></i>
                                : <i title="Iniciar" className="far fa-pause-circle"></i>
                            }
                        </span>
                        <span title="Reiniciar">
                            <i className="far fa-stop-circle"></i>
                        </span>
                        <span title="Detener">
                            <i className="fas fa-sync-alt"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="margin-sides">
                <div>
                    <label className="label text-center">Duración</label>
                    <div className="marginTop">
                        <span>
                           {selectItem}
                        </span>
                    </div>
                </div>
            </div>
            <div className="margin-sides">
                <div className="flex column-flex">
                    <label className="label text-center">Opciones</label>
                    <div className="marginTop flex column-flex center-text">
                        <div onClick={openModalEdit} className="marginTop margin-sides edit">
                            <span className="button-text center-text">
                                Editar
                            </span>
                        </div>
                        <div onClick={openModalDelete} className="margin-sides delete">
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