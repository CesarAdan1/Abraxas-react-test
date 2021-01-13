import React, { useState } from 'react';

export const TimeArea = ({time}) => {
    const cronometer = 0;
    const [status, setStatus] = useState(true);

    function onClickChangePlayToPause() {
        setStatus(!status)
    }

    return(
        <div className="">
             <div className="flex column-flex margin-sides">
                    <div className="margin-sides">
                        <div>
                            <label className="label text-center">Esta Actividad termina en</label>
                            <div className="marginTop">
                                <span>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="margin-sides">
                        <label className="label text-center">Acciones</label>
                        <div className="marginTop">
                            <span onClick={onClickChangePlayToPause}>
                                {status
                                    ? <i title="Pausar" className="fas fa-play pointer"></i>
                                    : <i title="Iniciar" className="far fa-pause-circle pointer"></i>
                                }
                            </span>
                            <span title="Reiniciar" className="pointer">
                                <i className="far fa-stop-circle"></i>
                            </span>
                            <span title="Detener">
                                <i className="fas fa-sync-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}