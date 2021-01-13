import React from 'react';
import { Modal } from '../../containers/modal/Modal';

export const ModalEdit = () => {
    return(
        <Modal 

        >
            <div>
                <div className="marginTop">
                    <div className="marginTop"> 
                        <label className="label text-center marginTop">Tarea</label>
                        <div className="">
                            <input 
                                className="input"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}