import React from 'react';
import { Modal } from '../../containers/modal/Modal';

export const ModalAdd = () => {
    return (
        <Modal
            titleAction="Añadir"
        >
            <div>
                <div className="marginTop">
                    <Label 
                        labelName="Ingresa una Tarea"
                        placholderName="e.g. Hacer mi tarea"
                    />
                </div>
            </div>
        </Modal>
    )
}


export const Label = ({ labelName, placeholderName }) => {
    return (
        <label className="label text-center marginTop">
            {labelName}
            <input
                className="input"
                placeholder={placeholderName}
            />
        </label>
    )
}